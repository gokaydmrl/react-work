import { createFileRoute } from "@tanstack/react-router";
import LoginComponent from "../components/Login/Login";
export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return <LoginComponent />;
}
export default Login;
