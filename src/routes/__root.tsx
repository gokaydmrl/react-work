//import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import "../App.css";
import "../index.css";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <Outlet key={"outlet"} />;
}
