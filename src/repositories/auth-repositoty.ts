import { api } from "../services/api";

export const authApi = {
  async login({ email, password }: { email: string; password: string }) {
    const { data, status } = await api.post("auth/login", {
      email,
      password,
    });

    return { data, status };
  },
};
