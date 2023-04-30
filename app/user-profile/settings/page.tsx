"use client";
import { useAuth, UserProfile } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Page() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // If the user is not logged in, redirect to the login page.
  if (!isLoaded || !userId) {
    return redirect("/");
  }

  return (
    <div className="pb-12 flex justify-center px-4 sm:px-6 lg:px-8">
      <UserProfile path="/user-profile/settings" routing="path" />
    </div>
  );
}
