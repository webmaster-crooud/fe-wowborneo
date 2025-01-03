import { Ibrowse } from "@/hooks/useBrowse";
import { createInstance, useInterceptors } from "@/lib/axios";

const instance = createInstance({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
});
const api = useInterceptors(instance);

const User = {
  me: (token: string | null) =>
    api.get("/user/me", {
      headers: {
        Authorization: `Bearer ` + token,
      },
    }),
  showAll: (token: any, params?: Ibrowse) =>
    api.get("/user/show-all", {
      headers: { Authorization: "Bearer " + token },
      params,
    }),
  showOne: (token: any, id: string) =>
    api.get("/user/show-one/" + id, {
      headers: { Authorization: "Bearer " + token },
    }),
  create: (token: any, data: any) =>
    api.post("/user/create", data, {
      headers: { Authorization: "Bearer " + token },
    }),
  update: (token: any, id: string, data: any) =>
    api.put("/user/update/" + id, data, {
      headers: { Authorization: "Bearer " + token },
    }),
  delete: (token: any, id: string) =>
    api.delete("/user/delete/" + id, {
      headers: { Authorization: "Bearer " + token },
    }),
  showRoles: (token: any, id: string) =>
    api.get("/user/roles/" + id, {
      headers: { Authorization: "Bearer " + token },
    }),
  assignRoles: (token: any, id: string, data: any) =>
    api.put("/user/assign-roles/" + id, data, {
      headers: { Authorization: "Bearer " + token },
    }),
};

export { User };
