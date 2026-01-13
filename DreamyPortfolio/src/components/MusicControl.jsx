// src/components/MusicControl.jsx
import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import MusicGirlAnimation from "../assets/Music-girl.json"; // keep original path
import styles from "../styles/home.module.css";
import MusicFile from "../assets/echoofsadness.mp3";

/**
 * Single place to manage music playback.
 * Keeps audio object in a ref and exposes simple UI.
 */
export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // lazy-create Audio once on mount; don't create on every render
    audioRef.current = new Audio(MusicFile);
    audioRef.current.preload = "auto";

    // listen for external triggers if any
    const listener = (e) => {
      // example of react-to-global events (open/close)
      if (e.type === "pie:pauseAudio") {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    window.addEventListener("pie:pauseAudio", listener);
    return () => {
      window.removeEventListener("pie:pauseAudio", listener);
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!isPlaying) {
      audio.play().catch(() => {
        // browsers may block autoplay; user click allowed since this is user-initiated
      });
      playerRef.current?.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      playerRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.musicControl}>
      <button
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className={styles.musicButton}
        onClick={toggle}
      >
        <Player ref={playerRef} autoplay={false} loop src={MusicGirlAnimation} style={{ width: "100%", height: "100%" }} />
      </button>
      <div className={styles.musicLabel}>{isPlaying ? "Music is playing" : "Play Music"}</div>
    </div>
  );
}