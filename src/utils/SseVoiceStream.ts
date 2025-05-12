import { RealtimePCMPlayer } from "./WavStreamPlayer";
import connect from "./connect";
const realtimePCMPlayer = new RealtimePCMPlayer({ sampleRate: 24000 });

export const sseVoiceStream = (username: string) => {
  const isConnectionExist = localStorage.getItem("isConnectionExists");
  let res;

  if (!isConnectionExist) {
    res = connect(username);
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
    res = connect(username);
  }
};
