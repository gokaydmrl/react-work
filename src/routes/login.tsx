import { createFileRoute } from "@tanstack/react-router";
import LoginComponent from "../components/Login/Login";
import Bubbles from "../components/BubbleAnimation/Bubbles";
export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <>
      <LoginComponent />
      <Bubbles />
    </>
  );
}
export default Login;
