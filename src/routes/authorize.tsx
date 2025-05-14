import { createFileRoute } from "@tanstack/react-router";
import Bubbles from "../components/BubbleAnimation/Bubbles";
export const Route = createFileRoute("/authorize")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Bubbles />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "234123",
          border: "5px solid red",
          width: "500px",
          height: "500px",
        }}
      >
        <div>
          <h4 style={{ color: "black" }}>hello world</h4>
        </div>
      </div>
    </>
  );
}
