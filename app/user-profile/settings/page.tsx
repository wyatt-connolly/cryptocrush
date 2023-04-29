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
    <div className="flex justify-center">
      <UserProfile path="/user-profile/settings" routing="path" />
    </div>
  );
}
