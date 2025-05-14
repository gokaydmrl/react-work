import { createFileRoute } from "@tanstack/react-router";
import "../index.css";
import "../App.css";
import { sseVoiceStream } from "../utils/SseVoiceStream";
import RouterRootWrapper from "../components/routerRootWrapper";
import { useRedirectToLogin } from "../hooks/useRedirectToLogin";
import VoiceAnim from "../components/VoiceAnimation/VoiceAnim";

export const Route = createFileRoute("/")({
  component: Welcome,
});

function Welcome() {
  const { user, isAuthenticated } = useRedirectToLogin();

  return (
    <RouterRootWrapper>
      <div className="wrapper">
        <VoiceAnim />
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
            Welcome Me With AI Voice
          </button>
        </div>
      </div>
    </RouterRootWrapper>
  );
}
