import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Buttons/Login/LoginButton";
import { LogoutButton } from "../Buttons/Login/LogoutButton";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

function LoginComponent() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate({ to: "/" });
    }
  }, [isAuthenticated, isLoading, navigate]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isAuthenticated && !isLoading ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
export default LoginComponent;
