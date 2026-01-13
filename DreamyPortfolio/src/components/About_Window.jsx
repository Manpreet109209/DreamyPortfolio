import "../styles/aboutWindow.css";
import * as React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import PiesQueen from "../assets/Pies-Queen.png";
import pinkFlyLottie from "../assets/pink-fly.json";

const AboutWindow = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isBouncing, setIsBouncing] = React.useState(false);
  const pinkFlyRef = React.useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      pinkFlyRef.current?.pause();
      setIsBouncing(false);
    } else {
      pinkFlyRef.current?.play();
      setIsBouncing(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="about-window">
      {/* Top Bar */}
      <div className="about-window__topbar">
        <h2 className="about-window__title">
          About – <span>Manpreet</span>
        </h2>
      </div>

      {/* Content */}
      <div className="about-window__content">
        {/* Image + Fly */}
        <div className="about-hero">
          <div className="about-avatar">
            <img src={PiesQueen} alt="Pie Queen" />
            <button
              className={`about-fly ${isBouncing ? "is-bouncing" : ""}`}
              onClick={togglePlay}
            >
              <Player ref={pinkFlyRef} src={pinkFlyLottie} loop />
            </button>
          </div>

          <div className="about-card">
            <h3>I Am Manpreet</h3>

            <div className="labels-wrap">
              <div className="labels-track">
                <span>A CS Student</span>
                <span>A Coder</span>
                <span>A Dreamer</span>
                <span>A Future Software Engineer</span>
                <span>A Long-Life Learner</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Text */}
        <div className="about-glass">
          <p>
            Hi! I’m a 16-year-old passionate learner currently in 12th grade,
            <br />exploring the world of <b>software engineering</b> and full-stack development.
          </p>
        </div>

        {/* Random Cat sitting*/}
        {/* <Player autoplay loop src={blackCatLottie} className="about-cat" /> */}
      </div>
    </div>
  );
};

export default AboutWindow;