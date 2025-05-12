import { useRouter } from "@tanstack/react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
export const useRedirectToLogin = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { navigate } = useRouter();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate({ to: `/login` });
      return;
    }
  }, [isAuthenticated, navigate, isLoading]);
  return { user, isAuthenticated, isLoading };
};
