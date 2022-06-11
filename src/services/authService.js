import axiosClient from "./axiosClient";

const authService = {
  logout: () => axiosClient.patch("auth/logout"),
  login: (data) => axiosClient.post("auth/login", data),
  register: (data) => axiosClient.post("auth/register", data),
};

export default authService;
