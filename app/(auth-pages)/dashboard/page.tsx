// app/(auth-pages)/dashboard/page.tsx
import Link from "next/link"; // Import Link
import { signOutAction } from "@/app/actions";
import MyTimer from "@/components/timer";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from '../header';

export default async function Dashboard() {
  // Sample job posting data
  const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
  
    if (!user) {
      return redirect("/sign-in");
    }
    
  const { data: jobs, error } = await supabase
  .from("jobs")
  .select("id, title, description, location, budget, created_at")
  .eq("owner", user.id);

  const time = new Date();
    time.setSeconds(time.getSeconds() + 1800);

  return (
    <div className="flex items-center justify-center h-screen w-screen max-w-screen bg-gradient-to-br from-black to-purple-600">
      < Header/>
      <div className="bg-gray-100 p-6 px-16 rounded-lg shadow-md w-500 space-y-4">
        <h1 className="text-2xl w-80 font-medium text-center mb-6">Welcome to Your Dashboard!</h1>
        {jobs?.map((job) => (
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-4">{job.title}</h2>
          <p className="text-gray-700 mb-2">{job.description}</p>
          <p className="text-sm text-gray-600 mb-2">Location: {job.location}</p>
          <p className="text-sm text-gray-600 mb-2">Budget: {job.budget}</p>
          <p className="text-xs text-gray-500">Posted on: {new Date(job.created_at).toLocaleDateString()}</p>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <Link href="dashboard/create-job" className="text-blue-600 font-medium underline">
            Create a New Job Posting
          </Link>
        </div>
      </div>
      <div className="hidden">
        <MyTimer expiryTimestamp={time}/>
      </div>
    </div>
  );
};