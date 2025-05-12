import { StrictMode } from "react";
import "./index.css";
import "./App.css";
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

  const VITE_API_AUTH0_DOMAIN = import.meta.env.VITE_API_AUTH0_DOMAIN;
  const VITE_API_AUTH0_CLIENT_ID = import.meta.env.VITE_API_AUTH0_CLIENT_ID;
  const VITE_API_AUTH0_AUDIENCE = import.meta.env.VITE_API_AUTH0_AUDIENCE;
  const VITE_API_AUTH0_SCOPE = import.meta.env.SCOPE;

  root.render(
    <StrictMode>
      <Auth0Provider
        domain={VITE_API_AUTH0_DOMAIN}
        clientId={VITE_API_AUTH0_CLIENT_ID}
        authorizationParams={{
          audience: VITE_API_AUTH0_AUDIENCE,
          scope: VITE_API_AUTH0_SCOPE,
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
