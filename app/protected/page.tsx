import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { cookies } from 'next/headers';
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { SubmitButton } from "@/components/submit-button";
import { signOutAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function ProtectedPage(props: {
  searchParams: Promise<Message>;
}) {
  const supabase = await createClient();
  const searchParams = await props.searchParams;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }
  if (!user) {
    return redirect("/sign-in");
  }
  
  const userInfo = JSON.parse(JSON.stringify(user));
  const { data: profiles, error } = await supabase.from('profiles').select();
  if (error) console.error("Error fetching profiles:", error);

  return (
  <>
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          This is a protected page that you can only see as an authenticated
          user
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your user details</h2>
        <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
          {JSON.stringify(profiles, null, 2)}
        </pre>
        <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        
        <SubmitButton formAction={signOutAction} pendingText="Signing Out...">
          Sign out
        </SubmitButton>
        <FormMessage message={searchParams} />

      </form>
      </div>
      <div>
        <h2 className="font-bold text-2xl mb-4">Next steps</h2>
        <FetchDataSteps />
      </div>
    </div>
  </>
  );
}
