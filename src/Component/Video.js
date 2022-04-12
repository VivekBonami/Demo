import React from "react";

// video component using in home page and premium sign up page

function Video(props) {
  const {
    id,
    preload,
    playsinline,
    controls,
    autobuffer,
    clName,
    posterImg,
    srcVideo,
    autoplay,
    loop,
    muted,
    videoRef,
  } = props;

  return (
    <video
      ref={videoRef}
      id={id}
      preload={preload}
      playsInline={playsinline}
      controls={controls}
      autobuffer={autobuffer}
      className={clName}
      poster={posterImg}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
    >
      <source src={srcVideo} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}

export default Video;
