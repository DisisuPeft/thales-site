"use client";

import { redirect } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
// import { Modal } from "@/app/components/common/Modal"
// import Loading from "@/app/components/common/Loading"
import { useRetrieveUserQuery } from "@/redux/features/auth/authApiSlice";
import { Role } from "@/redux/features/types/auth/auth-types";
// import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function RequireAuth({ children, allowedRoles }: Props) {
  const { isLoading, isAuth } = useAppSelector((state) => state.auth);
  const { data: user } = useRetrieveUserQuery();
  // console.log(user)
  if (isLoading) {
    return (
      <div className="flex justify-center bg-white h-screen text-gray-900"></div>
    );
  }
  if (!isAuth) {
    redirect("/login");
  }

  if (allowedRoles?.length && user) {
    const hasAccess = user?.roles?.some((r: Role) =>
      allowedRoles?.includes(r.name)
    );
    if (!hasAccess) {
      redirect("/unauthorized");
    }
  }

  return <>{children}</>;
}
