"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserButtonProps {
  user: User;
}

export function UserButton({ user }: UserButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await authClient.signOut();
      router.push("/auth/sign-in");
      router.refresh();
    } catch (error) {
      console.error("Failed to sign out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-600">
        Welcome, {user.name}
      </span>
      <button
        onClick={handleSignOut}
        disabled={isLoading}
        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:opacity-50"
      >
        {isLoading ? "Signing out..." : "Sign Out"}
      </button>
    </div>
  );
}