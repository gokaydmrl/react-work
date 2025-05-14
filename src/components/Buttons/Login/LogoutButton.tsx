import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout, isLoading, isAuthenticated } = useAuth0();
  const logoutWithRemovingLocalStorage = () => {
    localStorage.removeItem("isConnectionExists");
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  return (
    <div>
      {!isLoading && isAuthenticated && (
        <button
          style={{
            zIndex: "100",
          }}
          onClick={() => logoutWithRemovingLocalStorage()}
        >
          Logout
        </button>
      )}
    </div>
  );
};
