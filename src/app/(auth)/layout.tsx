"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { PROFILE } from "@/constants/profile";
import appStore from "@/stores";
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const divStyle = {
    backgroundImage: `url(/images/hero.jpg)`,
  };
  const { uid } = appStore();
  const router = useRouter();
  if (uid) {
    router.push("/dashboard/booking");
  }
  return (
    <div className="container relative grid flex-col items-center justify-center h-screen max-w-7xl lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex">
        <div
          className="absolute inset-0 object-cover bg-center bg-cover"
          style={divStyle}
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="flex items-center gap-2">
            <h4 className="text-white text-2xl font-semibold font-lora">
              Wow Borneo
            </h4>
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-white text-center">
              <span>{`${PROFILE.address}, `}</span>
              <span>{`+${PROFILE.phone}, `}</span>
              <span>{`${PROFILE.email}`}</span>
            </p>
          </blockquote>
        </div>
      </div>
      {children}
    </div>
  );
}
