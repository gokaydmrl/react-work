//import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import "../App.css";
import "../index.css";
import { LogoutButton } from "../components/Buttons/Login/LogoutButton";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet key={"outlet"} />
      <div style={{ position: "absolute", right: "32px", bottom: "32px" }}>
        <LogoutButton />
      </div>
    </>
  );
}
