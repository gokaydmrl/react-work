import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import "../index.css";
export const Route = createFileRoute("/authorize")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/authorize"!</div>;
}
