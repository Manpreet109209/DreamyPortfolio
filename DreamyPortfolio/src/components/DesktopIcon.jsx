// src/components/DesktopIcon.jsx
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "../styles/home.module.css";

/**
 * DesktopIcon
 * - Always-playing Lottie icon
 * - Accessible button (mouse + keyboard)
 * - Clean, declarative, production-ready
 *
 * Props:
 *  - id
 *  - left
 *  - top
 *  - label
 *  - lottieSrc
 *  - onOpen
 */
export default function DesktopIcon({
  id,
  left = "0",
  top = "0",
  label,
  lottieSrc,
  onOpen
}) {
  const handleActivate = () => {
    onOpen?.();
  };

  return (
    <div
      className={styles.iconWrap}
      style={{ left, top }}
      data-icon-id={id}
    >
      <button
        type="button"
        className={styles.iconButton}
        aria-label={`Open ${label}`}
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActivate();
          }
        }}
      >
        <Player
          autoplay
          loop
          src={lottieSrc}
          speed={0.9}
          style={{ width: "100%", height: "100%" }}
        />
      </button>

      <div className={styles.iconLabel}>{label}</div>
    </div>
  );
}