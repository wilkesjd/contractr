import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex items-center justify-center h-screen w-screen max-w-screen bg-gradient-to-br from-black to-purple-600">
      <form className="bg-gray-100 p-6 rounded-lg shadow-md w-80 space-y-4">
        <h1 className="text-2xl font-medium text-center">Log In</h1>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link className="text-blue-600 font-medium underline" href="/sign-up">
            Sign Up
          </Link>
        </p>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
            <Link
              className="text-xs text-blue-600 underline mt-2 inline-block"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex justify-center">
            <SubmitButton pendingText="Signing In..." formAction={signInAction}>
              Log In
            </SubmitButton>
          </div>
        </div>
        <FormMessage message={searchParams} />
      </form>
    </div>
  );
}
