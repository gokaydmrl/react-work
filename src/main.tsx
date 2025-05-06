import { StrictMode } from "react";
import "./index.css";

import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";
import { Auth0Provider } from "@auth0/auth0-react";
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Auth0Provider
        domain="dev-uaefh4jccukgswpy.us.auth0.com"
        clientId="BReyLFKRLpIBUWQBWWJEaIQTRRm03Fhc"
        authorizationParams={{
          audience: "https://dev-uaefh4jccukgswpy.us.auth0.com/api/v2/",
          scope:
            "read:current_user update:current_user_metadata openid profile email",
          redirect_uri: window.location.origin,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </StrictMode>
  );
}

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
