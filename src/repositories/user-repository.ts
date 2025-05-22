import { api } from "../services/api";

export const userApi = {
  async createUser({ email, password }: { email: string; password: string }) {
    const { data, status } = await api.post("users/", {
      email,
      password,
    });

    return { data, status };
  },
};
