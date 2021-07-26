import wave from "../images/wave.webm";

export default function Video() {
  return (
    <video
      autoplay=""
      muted
      loop
      id="bgVideo"
      className="min-h-full min-w-full fixed inset-0 object-cover"
      src={wave}
      type="video/webm"
    ></video>
  );
}
