"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "@/components/admin/ui/button";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import { useForm } from "react-hook-form";
import { LoginValidator } from "@/lib/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { Auth } from "@/utils/api/auth";
import Swal from "sweetalert2";
import appStore from "@/stores";
import { useRouter } from "next/navigation";

interface SignInProps extends React.HTMLAttributes<HTMLDivElement> {}

function SignIn({ className, ...props }: SignInProps) {
  const { setRole, setUser, setToken, setUid, setRoles } = appStore();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof LoginValidator>>({
    resolver: zodResolver(LoginValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: LoginUser, isPending } = useMutation({
    mutationFn: async (payload: z.infer<typeof LoginValidator>) => {
      const res = await Auth.login({
        email: payload.email,
        password: payload.password,
      });
      return res;
    },
    onError: (err: any) => {
      Swal.fire({
        icon: "error",
        title: "Tidak Ditemukan",
        text: err?.response?.data?.message ?? "",
      });
    },
    onSuccess: (e: any) => {
      const { user, token } = e.data.data;
      const activeRole = user.user_roles.filter((ur: any) => ur.is_active);

      setUid(user.id);
      setToken(token?.at);
      setRoles(user?.user_roles ?? []);
      setUser({
        avatar: user.avatar ?? "",
        full_name: user.full_name ?? "",
        email: user.email ?? "",
      });

      if (activeRole.length) {
        setRole(activeRole[0].role.code);
        const code = activeRole[0].role?.code || "";
        if (code == "SDM" || code == "ADM") router.push("/dashboard/booking");
      } else {
        Swal.fire({
          icon: "warning",
          title: "Tidak Ada Akses",
          text: "Akun anda belum mempunyai akses, silakan coba hubungi admin aplikasi",
        });
      }
    },
  });

  async function onSubmit(data: z.infer<typeof LoginValidator>) {
    const payload: z.infer<typeof LoginValidator> = {
      email: data.email,
      password: data.password,
    };
    LoginUser(payload);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isPending}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button disabled={isPending} isLoading={isPending}>
            Login
          </Button>
        </div>
      </form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            OR LOGIN USING
          </span>
        </div>
      </div> */}
      {/* <p className="px-8 text-sm leading-6 text-center text-muted-foreground">
        Don't have an account?{" "}
        <Link
          href="/sign-up"
          className="underline underline-offset-4 hover:text-primary"
        >
          Sign up
        </Link>{" "}
        or{" "}
        <Link
          href="/reset-password"
          className="underline underline-offset-4 hover:text-primary"
        >
          forgot password
        </Link>
        .
      </p> */}
    </div>
  );
}

export default SignIn;
