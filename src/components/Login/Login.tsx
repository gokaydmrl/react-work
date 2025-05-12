import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Buttons/Login/LoginButton";
import { LogoutButton } from "../Buttons/Login/LogoutButton";

function LoginComponent() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {isAuthenticated && !isLoading ? <LogoutButton /> : <LoginButton />};
    </div>
  );
}
export default LoginComponent;
