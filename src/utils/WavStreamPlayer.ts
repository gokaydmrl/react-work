export class RealtimePCMPlayer {
  sampleRate: number;
  numChannels: number;
  isPlaying: boolean;

  audioContext: AudioContext;
  queue: ArrayBuffer[];
  nextPlayTime: number;
  constructor({ sampleRate = 24000, numChannels = 1 }) {
    this.sampleRate = sampleRate;
    this.numChannels = numChannels;
    this.audioContext = new AudioContext({ sampleRate });
    this.queue = [];
    this.isPlaying = false;
    this.nextPlayTime = this.audioContext.currentTime;
  }

  enqueueChunk(base64PCM: string) {
    const pcmBuffer = this.base64ToPCM16ArrayBuffer(base64PCM);
    this.queue.push(pcmBuffer);
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.processQueue();
    }
  }

  async resume() {
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume();
      console.log("AudioContext resumed");
    }
  }

  async processQueue() {
    while (this.queue.length > 0) {
      const pcmBuffer = this.queue.shift();
      const audioBuffer = this.pcm16ToAudioBuffer(pcmBuffer);
      this.playAudioBuffer(audioBuffer);
      await this.wait(audioBuffer.duration);
    }
    this.isPlaying = false;
  }

  pcm16ToAudioBuffer(pcmBuffer: ArrayBuffer | undefined) {
    const int16View = new Int16Array(pcmBuffer!);
    const float32 = new Float32Array(int16View.length);
    for (let i = 0; i < int16View.length; i++) {
      float32[i] = int16View[i] / 32768; // Convert to [-1, 1] range
    }

    const audioBuffer = this.audioContext.createBuffer(
      this.numChannels,
      float32.length,
      this.sampleRate
    );
    audioBuffer.getChannelData(0).set(float32);
    return audioBuffer;
  }

  playAudioBuffer(buffer: AudioBuffer) {
    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(this.audioContext.destination);
    source.start(this.nextPlayTime);
    this.nextPlayTime += buffer.duration;
  }

  base64ToPCM16ArrayBuffer(base64: string) {
    const binaryStr = atob(base64);
    const len = binaryStr.length;
    const buffer = new ArrayBuffer(len);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < len; i++) {
      view[i] = binaryStr.charCodeAt(i);
    }
    return buffer;
  }

  wait(seconds: number) {
    return new Promise((res) => setTimeout(res, seconds * 1000));
  }
}
