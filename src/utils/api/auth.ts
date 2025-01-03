import { Ibrowse } from "@/hooks/useBrowse";
import { createInstance, useInterceptors } from "@/lib/axios";

const instance = createInstance({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});

const api = useInterceptors(instance);

const Auth = {
  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),
  register: (data: {
    full_name: string;
    email: string;
    password: string;
    confirm_password: string;
  }) => api.post("/auth/register", data),
  verifyEmail: (data: { encoded_email: string }) =>
    api.put("/auth/verify-email", data),
  forgotPassword: (data: { email: string }) =>
    api.post("/auth/forgot-password", data),
  resetPassword: (
    token: any,
    data: {
      encoded_email: string;
      new_password: string;
      confirm_password: string;
    }
  ) =>
    api.put("/auth/reset-pass", data, {
      headers: { Authorization: "Bearer " + token },
    }),
};

const Role = {
  showAll: (token: any, params?: Ibrowse) =>
    api.get("/role/show-all", {
      headers: { Authorization: "Bearer " + token },
      params,
    }),
  showOne: (token: any, id: string) =>
    api.get("/role/show-one/" + id, {
      headers: { Authorization: "Bearer " + token },
    }),
  create: (token: any, data: any) =>
    api.post("/role/create", data, {
      headers: { Authorization: "Bearer " + token },
    }),
  update: (token: any, id: string, data: any) =>
    api.put("/role/update/" + id, data, {
      headers: { Authorization: "Bearer " + token },
    }),
  delete: (token: any, id: string) =>
    api.delete("/role/delete/" + id, {
      headers: { Authorization: "Bearer " + token },
    }),
};

export { Auth, Role };
