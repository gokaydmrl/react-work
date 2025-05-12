import { RealtimePCMPlayer } from "./WavStreamPlayer";
import { AppEventSource } from "./AppEventSource";
const realtimePCMPlayer = new RealtimePCMPlayer({ sampleRate: 24000 });

export const sseVoiceStream = (username: string) => {
  const urlDev = `${import.meta.env.VITE_API_URL}/getWelcome`;
  const isConnectionExist = localStorage.getItem("isConnectionExists");
  let res;
  // const connect = () => {
  //   const connection = new AppEventSource(urlDev, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Cache-Control": "no-cache",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  //       "Access-Control-Allow-Headers": "Content-Type",
  //       "Access-Control-Allow-Credentials": "true",
  //       Connection: "keep-alive",
  //       username,
  //     },
  //   });
  //   return connection;
  // }
  if (!isConnectionExist) {
    res = new AppEventSource(urlDev, {
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
  }
  if (res) {
    res.onerror = (error) => {
      console.log("error", error);
    };

    res.onmessage = (data) => {
      const parsedData = JSON.parse(data.data);

      if (parsedData.type === "response.audio.delta") {
        console.log("parsedData.event_id", parsedData.event_id);

        realtimePCMPlayer.enqueueChunk(parsedData.delta);
      }
    };
  } else {
    res = new AppEventSource(urlDev, {
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
  }
};
