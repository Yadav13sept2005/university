import React, { useRef } from "react";
import "./Videoplayer.css";
import vedio from "../assets/vedio.mp4";

const VideoPlayer = ({ playstate, setplaystate }) => {
  let close = useRef(null);
  let closevedio = (e) => {
    if (e.target === close.current) {
      setplaystate(false);
    }
  };
  return (
    <div
      className={`videoplayer  ${playstate ? "" : "hide"}`}
      ref={close}
      onClick={closevedio}
    >
      <video src={vedio} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
