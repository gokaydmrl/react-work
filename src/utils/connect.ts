import { AppEventSource } from "./AppEventSource";
const urlDev = `${import.meta.env.VITE_API_URL}/getWelcome`;

const connect = (username: string) => {
  const connection = new AppEventSource(urlDev, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true",
      Connection: "keep-alive",
      username,
    },
  });
  localStorage.setItem("isConnectionExists", "true");
  return connection;
};
export default connect;
