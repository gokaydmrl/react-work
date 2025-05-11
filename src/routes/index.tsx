import { useAuth0 } from "@auth0/auth0-react";
import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import "../App.css";
import { sseVoiceStream } from "../utils/SseVoiceStream";
import { useEffect } from "react";
import RouterRootWrapper from "../components/routerRootWrapper";
export const Route = createFileRoute("/")({
  component: About,
});

function About() {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    sseVoiceStream(user && user.name ? user.name : "kullanıcı");
  }, [user, isAuthenticated]);

  return (
    <RouterRootWrapper>
      <div className="wrapper">
        <div>
          <p>
            Helloo <span className="boldFont">{user?.name}!</span> <br /> Click
            to get welcome message <br /> from AI
          </p>
        </div>
        <div>
          <button
            onClick={() =>
              sseVoiceStream(user && user.name ? user.name : "kullanıcı")
            }
            disabled={!isAuthenticated}
          >
            Welcome Me
          </button>
        </div>
      </div>
    </RouterRootWrapper>
  );
}
