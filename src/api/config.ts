import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

let refresh = false;

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !refresh) {
      refresh = true;
      try {
        const { data } = await axiosInstance.get("/api/auth/refresh", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Update the access token in localStorage
        // Handle when refresh token expires

        originalRequest.headers["Authorization"] = `Bearer ${data.data.token}`;
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.data.token}`;
        localStorage.setItem("token", data.data.token);

        return axiosInstance(originalRequest);
      } catch (error) {
        localStorage.removeItem("token");
        window.location.reload();
        console.log(error);
      }
    }
    refresh = false;
    return Promise.reject(error);
  }
);
