import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen max-w-screen bg-gradient-to-br from-black to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Signed in as {user.email}</h1>
        <p className="text-lg">Page working from email redirect, need knowledge of database variables before continuing</p>

        <form className="bg-gray-100 p-6 rounded-lg shadow-md w-80 space-y-4">
        <h1 className="text-black text-2xl font-medium text-center">Thanks for signing with Contractr!</h1>
        <p className="text-sm text-center text-foreground">
        Please select your desired role.
        </p>
      </form>
      </div>
    </div>
  );
}
