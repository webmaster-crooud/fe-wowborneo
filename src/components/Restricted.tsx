"use client";

import Forbidden from "@/components/Forbidden";
import appStore from "@/stores/index";
import { useRouter } from "next/navigation";
import { ReactNode, JSX } from "react";

interface Props {
  roles?: string[];
  children: ReactNode;
}

const Restricted = ({ roles, children }: Props): JSX.Element | null => {
  const { role } = appStore();
  const router = useRouter();

  if (!role) {
    router.push("/sign-in");
    return null;
  }

  if (roles && !roles.includes(role)) return <Forbidden />;

  return <>{children}</>;
};

export default Restricted;
