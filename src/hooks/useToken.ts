import { useAuth0 } from "@auth0/auth0-react";
import useStore from "../store/store";
export const useToken = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { setToken } = useStore();

  const fetchToken = async () => {
    const token = await getAccessTokenSilently();
    setToken(token);
  };
  fetchToken();
};
