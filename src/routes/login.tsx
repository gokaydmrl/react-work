import { createFileRoute } from "@tanstack/react-router";
import LoginComponent from "../components/Login/Login";
import Bubbles from "../components/BubbleAnimation/Bubbles";
import Welcome from "../components/Welcome/Welcome";
import RouterRootWrapper from "../components/routerRootWrapper";
export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <RouterRootWrapper>
      <div>
        <Welcome />
        <LoginComponent />
      </div>
      <div style={{ position: "relative", zIndex: -100 }}>
        <Bubbles />
      </div>
    </RouterRootWrapper>
  );
}
export default Login;
