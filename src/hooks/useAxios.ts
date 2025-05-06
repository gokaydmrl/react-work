// import axios from "axios";
// import { useAuth0 } from "@auth0/auth0-react";
// import useStore from "../store/store";
// import { useMemo } from "react";
// export const useAxios = () => {
//   const { token, setToken } = useStore();
//   const { getAccessTokenSilently } = useAuth0();
//   const getToken = async () => {
//     const token = await getAccessTokenSilently();
//     setToken(token);
//   };
//   getToken();
//   const axiosInstance = useMemo(() => {
//     axios.create({
//       baseURL: "https//localhost:3000",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   });

//   return axiosInstance;
// };
import axios, { AxiosInstance } from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useMemo } from "react";

export const useAxios = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const axiosInstance: AxiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    instance.interceptors.request.use(async (config) => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return instance;
  }, [getAccessTokenSilently, isAuthenticated]);

  return axiosInstance;
};
