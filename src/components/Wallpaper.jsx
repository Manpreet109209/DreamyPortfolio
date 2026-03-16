// src/components/Wallpaper.jsx

import React from "react";
import styles from "../styles/home.module.css";
import wallpaper from "../assets/anime-traveling.jpg";

export default function Wallpaper() {
  return (
    <div className={styles.wallpaperRoot}>
      <img
        src={wallpaper}
        className={styles.wallpaperImage}
        alt=""
        aria-hidden="true"
        loading="eager"
      />
    </div>
  );
}