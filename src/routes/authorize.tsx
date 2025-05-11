import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import "../index.css";
export const Route = createFileRoute("/authorize")({
  component: RouteComponent,
});

// const auth0 = await createAuth0Client({
//   domain: "YOUR_DOMAIN",
//   client_id: "YOUR_CLIENT_ID",
//   redirect_uri: window.location.origin,
// });

function RouteComponent() {
  return <div>Hello "/authorize"!</div>;
}
