// app/(auth-pages)/dashboard/page.tsx
import Link from "next/link"; // Import Link
import { signOutAction } from "@/app/actions";
import MyTimer from "@/components/timer";
import Header from '../header';

const Dashboard = () => {
  // Sample job posting data
  const time = new Date();
    time.setSeconds(time.getSeconds() + 1800); // 10 second timer
  const jobPosting = {
    title: "Bathroom Remodel",
    description: "Looking for a contractor to remodel a small bathroom. Includes demo, tiling, plumbing, and painting.",
    location: "123 Main St, Springfield, IL",
    budget: "$5,000",
    postedOn: "2024-11-17",
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen max-w-screen bg-gradient-to-br from-black to-purple-600">
      < Header/>
      <div className="bg-gray-100 p-6 px-16 rounded-lg shadow-md w-500 space-y-4">
        <h1 className="text-2xl w-80 font-medium text-center mb-6">Welcome to Your Dashboard</h1>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-4">{jobPosting.title}</h2>
          <p className="text-gray-700 mb-2">{jobPosting.description}</p>
          <p className="text-sm text-gray-600 mb-2">Location: {jobPosting.location}</p>
          <p className="text-sm text-gray-600 mb-2">Budget: {jobPosting.budget}</p>
          <p className="text-xs text-gray-500">Posted on: {jobPosting.postedOn}</p>
        </div>

        {/* Correctly using Link without the <a> tag */}
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

export default Dashboard;
