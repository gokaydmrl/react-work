import { useAuth0 } from "@auth0/auth0-react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { isAuthenticated } = useAuth0();
  const { navigate } = useRouter();

  const asd = () => {
    console.log("ohoooooo");

    navigate({ to: "/login" });
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <div className="p-2">Hello from About!</div>
      <button onClick={asd}>adsasdas</button>;
    </>
  );
}
