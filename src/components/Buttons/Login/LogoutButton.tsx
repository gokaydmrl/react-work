import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout, isLoading, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isLoading && isAuthenticated && (
        <button
          style={{
            zIndex: "100",
          }}
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            })
          }
        >
          Logoutqwe
        </button>
      )}
    </div>
  );
};
