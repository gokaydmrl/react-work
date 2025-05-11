import { createFileRoute } from "@tanstack/react-router";
import { useAuth0 } from "@auth0/auth0-react";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <p>hello world</p>
      <button onClick={() => loginWithRedirect()}>Log In</button>;
      <button
        onClick={() =>
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          })
        }
      >
        Log out
      </button>
      ;
    </div>
  );
}
export default Login;
