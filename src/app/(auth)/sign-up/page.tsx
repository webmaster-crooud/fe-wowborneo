import { Metadata } from "next";

import SignUp from "@/components/forms/SignUp";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up User",
};

export default function AuthenticationPage() {
  return (
    <div className="lg:p-8">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Register Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your information to register for an account
          </p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
