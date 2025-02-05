"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "@/components/admin/ui/button";
import { Input } from "@/components/admin/ui/input";
import { Label } from "@/components/admin/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterValidator } from "@/lib/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/admin/ui/use-toast";
interface SignInProps extends React.HTMLAttributes<HTMLDivElement> {}

function SignIn({ className, ...props }: SignInProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterValidator>>({
    resolver: zodResolver(RegisterValidator),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: async (payload: z.infer<typeof RegisterValidator>) => {
      // return await userRegister(payload);
    },
    onError: (error) => {
      toast({
        title: `${error}`,
        variant: "destructive",
      });
    },
    // onSuccess: (data) => {
    //   if (data.error) {
    //     toast({
    //       title: `${data.error}`,
    //       variant: "destructive",
    //     });
    //     reset({ password: "", confirmPassword: "" });
    //   } else {
    //     toast({
    //       title: "Please check your email",
    //       description: data.success,
    //     });
    //     reset();
    //   }
    // },
  });

  async function onSubmit(data: z.infer<typeof RegisterValidator>) {
    const payload: z.infer<typeof RegisterValidator> = {
      username: data.username,
      address: data.address,
      email: data.email,
      password: data.password,
      phone: data.phone,
      confirmPassword: data.confirmPassword,
    };
    registerUser(payload);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Name"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
              {...register("username")}
            />
            {errors?.username && (
              <p className="px-1 text-xs text-red-600">
                {errors.username.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isPending}
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
              {...register("password")}
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="confirm-password">
              Confirm Password
            </Label>
            <Input
              {...register("confirmPassword")}
              id="confirm-password"
              placeholder="Confirm Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="address">
              Address
            </Label>
            <Input
              {...register("address")}
              id="address"
              placeholder="Address"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
            />
            {errors?.address && (
              <p className="px-1 text-xs text-red-600">
                {errors.address.message}
              </p>
            )}
            <Label className="sr-only" htmlFor="phone">
              Phone
            </Label>
            <Input
              {...register("phone")}
              id="phone"
              placeholder="Phone"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isPending}
            />
            {errors?.phone && (
              <p className="px-1 text-xs text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
          <Button isLoading={isPending}>Register</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-background text-muted-foreground">
            OR REGISTER USING
          </span>
        </div>
      </div>
      <p className="px-8 text-sm leading-6 text-center text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="underline underline-offset-4 hover:text-orange-borneo"
        >
          Sign in
        </Link>{" "}
        {/* or{" "}
        <Link
          href="/reset-password"
          className="underline underline-offset-4 hover:text-primary"
        >
          forgot password
        </Link>
        . */}
      </p>
    </div>
  );
}

export default SignIn;
