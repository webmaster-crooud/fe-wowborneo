import axios, { AxiosInstance } from "axios";
import Swal from "sweetalert2";

const createInstance = ({ baseURL }: { baseURL: string }): AxiosInstance => {
  return axios.create({
    baseURL,
  });
};

const useInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const { response, code } = err;

      if (code && code == "ERR_NETWORK") {
        Swal.fire({
          icon: "error",
          title: "Sinyal Terganggu",
          text: "Gagal terhubung ke server. Coba lagi nanti",
        });
      }

      if (response) {
        const status = response.status ?? 0;
        const message = response?.data?.message;
        const data = response?.data?.data;

        if (status == 401) {
          if (!err.config?.sent) {
            // handle refresh token
          }
        } else if (status == 400) {
          Swal.fire({
            icon: "error",
            title: "Permintaan Gagal",
            text: message ?? "",
          });
        } else if (status == 403) {
          Swal.fire({
            icon: "error",
            title: "Akses Terbatas",
            text: message ?? "",
          });
        } else if (status == 404) {
          Swal.fire({
            icon: "error",
            title: "Tidak Ditemukan",
            text: message ?? "",
          });
        } else if (status == 422) {
          Swal.fire({
            icon: "error",
            title: "Permintaan Gagal Diproses",
            text: Array.isArray(data) ? data?.join(", ") : message ?? "",
          });
        } else if (status >= 500) {
          Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Terjadi masalah di sisi server",
          });
        }
      }
      throw err;
    }
  );

  return instance;
};

export { createInstance, useInterceptors };
