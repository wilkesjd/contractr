import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Signup(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen max-w-screen bg-gradient-to-br from-black to-purple-600">
      <form className="bg-gray-100 p-6 rounded-lg shadow-md w-80 space-y-4">
        <h1 className="text-2xl font-medium text-center">Sign Up</h1>
        <p className="text-sm text-center text-foreground">
          Already have an account?{" "}
          <Link className="text-blue-600 font-medium underline" href="/sign-in">
            Log In
          </Link>
        </p>
        <div className="flex flex-col gap-4 mt-8">
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
              minLength={6}
              required
            />
          </div>
          <div className="flex justify-center mt-4">
            <SubmitButton formAction={signUpAction} pendingText="Signing up...">
              Sign Up
            </SubmitButton>
          </div>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
