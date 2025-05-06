import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { redirect } from "@tanstack/react-router";
import useStore from "../store/store";
import { useAxios } from "./useAxios";
export const useUserSave = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const instance = useAxios();
  const { token, setToken } = useStore();
  useEffect(() => {
    console.log("effect useUserSave hook");

    if (!isAuthenticated) {
      redirect({ to: "/login" });
      console.log("effect useUserSave hook !isAuthenticated");
      return;
    }
    if (isAuthenticated && user) {
      const saveUser = async () => {
        console.log("effect useUserSave hook AAAuthenticated");

        const token = await getAccessTokenSilently();
        try {
          const response = await instance.post(
            "/saveUser/save",
            {
              sub: user.sub,
              username: user.nickname,
              nickname: user.nickname,
              id: user.sub,
              email: user.email,
              password: "password",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status !== 200) {
            redirect({ to: "/login" });
            return new Error("Failed to save user");
          }
          setToken(token);
          const data = response.data;
          console.log("User", data);
        } catch (error) {
          console.error("Error saving user:", error);
        }
      };
      saveUser();
    }
  }, [user, isAuthenticated, getAccessTokenSilently, token, setToken]);
  return { user, isAuthenticated, token };
};
