import Link from "next/link";

export default function SignUpSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">🎉 Account Created!</h1>

        <p>
          Check your email and click the verification link to activate your account.
        </p>

        <Link
          href="/auth/login"
          className="text-blue-500 underline"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}