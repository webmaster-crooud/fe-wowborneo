import { z } from "zod";

export const RegisterValidator = z.object({
  username: z
    .string()
    .min(3, {
      message: "Name must be more than 3 characters",
    })
    .max(128, {
      message: "Name must not exceed 128 characters",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password must be more than 6 characters",
    })
    .max(128, {
      message: "Password must not exceed 128 characters",
    }),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Password must be more than 6 characters",
    })
    .max(128, {
      message: "Password must not exceed 128 characters",
    }),
  email: z.string().email({
    message: "Email is required",
  }),
  address: z
    .string()
    .min(3, {
      message: "Address must be more than 3 characters",
    })
    .max(128, {
      message: "Address must not exceed 128 characters",
    }),
  phone: z
    .string()
    .min(9, {
      message: "Phone number must be more than 9 characters",
    })
    .max(14, {
      message: "Phone number must not exceed 14 characters",
    }),
});

export const LoginValidator = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const ResetValidator = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordValidator = z.object({
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const ChangePasswordValidator = z
  .object({
    encoded_email: z
      .string()
      .min(6, "Email must be at least 6 characters long"),
    current_password: z
      .string()
      .min(6, "Current password must be at least 6 characters long")
      .optional(),
    new_password: z
      .string()
      .min(6, "New password must be at least 8 characters long"),
    confirm_password: z
      .string()
      .min(6, "Confirm password must be at least 8 characters long"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
