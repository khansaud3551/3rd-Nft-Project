import React, { useEffect, useRef, useState } from "react";

function LoadingScreen({ videoLoaded, setVideoLoaded }) {
  const videoRef = useRef();

  useEffect(() => {
    //play with loop and autoplay
    videoRef.current.play();
    videoRef.current.loop = true;
    videoRef.current.autoplay = true;
    //affteer 5 seconds, set videoLoaded to true
    setTimeout(() => {
      setVideoLoaded(false);
    }, 5000);
  }, [videoRef, setVideoLoaded]);

  return (
    <>
      {/* <video width={520} height={240} autoplay muted loop>
        <source src="/assets/Video-1.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video> */}

      <video
        width="100%"
        muted
        ref={videoRef}
        className="video-rage"
        src="/assets/Video-1.mp4"
      ></video>

      {/* <img src="/assets/Video-1.gif" alt="" /> */}

      {/* <video width={520} height={240} autoplay muted loop>
        <source src="/assets/Video-1.gif" type="video/gif" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video> */}
    </>
  );
}

export default LoadingScreen;
