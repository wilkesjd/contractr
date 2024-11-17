"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const getUserData = async () => {
  const response = await fetch("/api/supabase-client"); // Calling the API route
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return await response.json();
};

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserData(); // Fetch user data
        if (userData) {
          setUser(userData);
        } else {
          router.push("/sign-in"); // Redirect to sign-in if no user
        }
      } catch (error) {
        console.error(error);
        router.push("/sign-in"); // Redirect on error
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black to-purple-600">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-80 text-center">
        {user ? (
          <>
            <h1 className="text-2xl font-medium">Welcome, {user.email}</h1>
            <p className="mt-4 text-sm">You are now logged in.</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}