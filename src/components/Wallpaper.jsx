// src/components/Wallpaper.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/home.module.css";
// import flowersTop from "../assets/flowers-top.png";
import fairy from "../assets/fairy.png";
import crown from "../assets/crown.png";
import flowersBottom from "../assets/flowers-bottom.png";
import fairyQueen from "../assets/fairyQueen.png";

/**
 * Wallpaper
 * - Listens to global custom events
 * - Cycles background videos with fade transition
 * - Plays open / close sounds safely
 */

const WALLPAPER_COUNT = 2;
const FADE_DURATION = 300;

export default function Wallpaper() {
  const [index, setIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const openSoundRef = useRef(null);
  const closeSoundRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    const cycleWallpaper = () => {
      setIsFading(true);

      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = setTimeout(() => {
        setIndex((prev) => (prev >= WALLPAPER_COUNT ? 1 : prev + 1));
        setIsFading(false);
      }, FADE_DURATION);
    };

    const handleOpenSound = () => {
      openSoundRef.current?.play().catch(() => {});
    };

    const handleCloseSound = () => {
      closeSoundRef.current?.play().catch(() => {});
    };

    window.addEventListener("pie:cycleWallpaper", cycleWallpaper);
    window.addEventListener("pie:openSound", handleOpenSound);
    window.addEventListener("pie:closeWithZoom", handleCloseSound);

    return () => {
      clearTimeout(fadeTimeoutRef.current);
      window.removeEventListener("pie:cycleWallpaper", cycleWallpaper);
      window.removeEventListener("pie:openSound", handleOpenSound);
      window.removeEventListener("pie:closeWithZoom", handleCloseSound);
    };
  }, []);

  return (
    <div className={styles.wallpaperRoot}>
      <video
        key={index}
        className={styles.wallpaperVideo}
        src={`/wallpapers/${index}.mp4`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ opacity: isFading ? 0 : 1 }}
      />

      {/* subtle glass overlay */}
      <div className={styles.centerGlass}>
        {/* <img
          src={flowersTop}
          alt=""
          aria-hidden="true"
          className={styles.glassFlowersTop}
        /> */}

        <img
          src={flowersBottom}
          alt=""
          aria-hidden="true"
          className={styles.glassFlowersBottom}
        />

        <img
          src={crown}
          alt=""
          aria-hidden="true"
          className={styles.FairyCrown}
        />

        <img
          src={fairy}
          alt=""
          aria-hidden="true"
          className={styles.glassFairy}
        />
        <img
          src={crown}
          alt=""
          aria-hidden="true"
          className={styles.FairyQueenCrown}
        />
        <img
          src={fairyQueen}
          alt=""
          aria-hidden="true"
          className={styles.glassFairyQueen}
        />
      </div>
    </div>
  );
}
