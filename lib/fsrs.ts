/**
 * Free Spaced Repetition Scheduler (FSRS) Algorithm
 * Simplified implementation for Sakura AI
 * Reference: https://github.com/open-spaced-repetition/fsrs4
 */

export interface CardState {
  due: Date
  stability: number
  difficulty: number
  elapsedDays: number
  scheduledDays: number
  reps: number
  lapses: number
  state: 'new' | 'learning' | 'review' | 'relearning'
}

export interface ReviewLog {
  rating: 0 | 1 | 2 | 3 | 4 | 5
  elapsedDays: number
  scheduledDays: number
  review: Date
  state: 'new' | 'learning' | 'review' | 'relearning'
}

const FSRS_PARAMETERS = {
  requestRetention: 0.9,
  maximumInterval: 36500,
  weights: [1.14, 1.01, 5.44, 14.67, 5.3024, 1.5662, 1.2503, 0.0028, 1.5489, 0.1763, 0.9953, 2.7473, 0.9907, 2.3084, 0.0974, 2.3084],
}

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x))
}

function log(x: number): number {
  return Math.log(Math.max(x, 1e-10))
}

function initCard(): CardState {
  return {
    due: new Date(),
    stability: 0.5,
    difficulty: 5,
    elapsedDays: 0,
    scheduledDays: 0,
    reps: 0,
    lapses: 0,
    state: 'new',
  }
}

function nextInterval(stability: number, maximumInterval: number): number {
  const newInterval = stability * 9 * (1 / FSRS_PARAMETERS.requestRetention - 1)
  return Math.min(Math.round(newInterval), maximumInterval)
}

function nextDifficulty(difficulty: number, rating: number): number {
  let newDifficulty = difficulty + FSRS_PARAMETERS.weights[4] * (8 - 5 * rating)
  return Math.min(Math.max(1, newDifficulty), 10)
}

function nextStability(
  rating: number,
  difficulty: number,
  stability: number,
  elapsedDays: number,
  reviewState: string,
): number {
  const newStability = (() => {
    if (reviewState === 'new') {
      return FSRS_PARAMETERS.weights[0] + FSRS_PARAMETERS.weights[1] * difficulty + FSRS_PARAMETERS.weights[2] * (Math.exp((rating - 3) * FSRS_PARAMETERS.weights[3]) - 1)
    } else if (reviewState === 'learning') {
      return FSRS_PARAMETERS.weights[0] + FSRS_PARAMETERS.weights[1] * difficulty + FSRS_PARAMETERS.weights[2] * (Math.exp((rating - 3) * FSRS_PARAMETERS.weights[3]) - 1)
    } else {
      return stability * (1 + FSRS_PARAMETERS.weights[5] * (9 - rating) + FSRS_PARAMETERS.weights[6] * log(elapsedDays / FSRS_PARAMETERS.weights[7] + 2) * (Math.exp((rating - 3) * FSRS_PARAMETERS.weights[8]) - 1))
    }
  })()

  return Math.max(0.1, newStability)
}

export function scheduleCard(
  card: CardState,
  rating: number,
  now: Date = new Date(),
): CardState {
  if (rating < 0 || rating > 5) {
    throw new Error('Rating must be between 0 and 5')
  }

  const elapsedDays = Math.round((now.getTime() - card.due.getTime()) / (24 * 60 * 60 * 1000))
  const reviewState = card.state

  let newDifficulty = nextDifficulty(card.difficulty, rating)
  let newStability = nextStability(rating, card.difficulty, card.stability, Math.max(0, elapsedDays), reviewState)
  let newState: CardState['state'] = 'review'
  let newScheduledDays = nextInterval(newStability, FSRS_PARAMETERS.maximumInterval)

  if (reviewState === 'new') {
    if (rating === 1) {
      newState = 'learning'
      newScheduledDays = 1
    } else if (rating === 2) {
      newState = 'learning'
      newScheduledDays = 3
    } else if (rating === 3) {
      newState = 'learning'
      newScheduledDays = 7
    } else {
      newState = 'review'
      newScheduledDays = nextInterval(newStability, FSRS_PARAMETERS.maximumInterval)
    }
  } else if (reviewState === 'learning') {
    if (rating >= 3) {
      newState = 'review'
      newScheduledDays = nextInterval(newStability, FSRS_PARAMETERS.maximumInterval)
    } else {
      newState = 'learning'
      newScheduledDays = 1
    }
  } else if (reviewState === 'review') {
    if (rating < 2) {
      newState = 'relearning'
      newScheduledDays = 1
    } else {
      newState = 'review'
      newScheduledDays = nextInterval(newStability, FSRS_PARAMETERS.maximumInterval)
    }
  } else if (reviewState === 'relearning') {
    if (rating >= 3) {
      newState = 'review'
      newScheduledDays = nextInterval(newStability, FSRS_PARAMETERS.maximumInterval)
    } else {
      newState = 'relearning'
      newScheduledDays = 1
    }
  }

  const newDue = new Date(now.getTime() + newScheduledDays * 24 * 60 * 60 * 1000)

  return {
    due: newDue,
    stability: newStability,
    difficulty: newDifficulty,
    elapsedDays: Math.max(0, elapsedDays),
    scheduledDays: newScheduledDays,
    reps: card.reps + 1,
    lapses: card.lapses + (rating < 2 ? 1 : 0),
    state: newState,
  }
}

export { initCard }
