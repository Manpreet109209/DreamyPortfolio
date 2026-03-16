// src/Home.jsx
import React from "react";
import Wallpaper from "./components/Wallpaper";
import DesktopIcon from "./components/DesktopIcon";
import MusicControl from "./components/MusicControl";
import WindowManager from "./components/WindowManager";

import styles from "./styles/home.module.css";

import { Player } from "@lottiefiles/react-lottie-player";

import AboutLottie from "./assets/About-me.json";
import WorkLottie from "./assets/work-lottie.json";
import LinksLottie from "./assets/Links.json";
import ContactLottie from "./assets/Contact.json";
import FaqLottie from "./assets/Faq.json";

export default function Home() {
  const [openWindow, setOpenWindow] = React.useState(null);
  const [closingWindow, setClosingWindow] = React.useState(null);

  const openWindowHandler = (name) => {
    window.dispatchEvent(new CustomEvent("pie:openSound"));
    setOpenWindow(name);
  };

  const closeWindowHandler = (name) => {
    setClosingWindow(name);

    setTimeout(() => {
      setOpenWindow((prev) => (prev === name ? null : prev));
      setClosingWindow(null);
    }, 300);
  };

  const DESKTOP_ICONS = [
    { id: "work", label: "Projects", anim: WorkLottie },
    { id: "about", label: "About Me", anim: AboutLottie },
    { id: "links", label: "Links", anim: LinksLottie },
    { id: "contact", label: "Contact", anim: ContactLottie },
    { id: "faq", label: "FAQ", anim: FaqLottie },
  ];

  return (
    <div className={styles.root}>
      <Wallpaper />

      {/* Desktop Icons */}
      <div className={styles.iconRow}>
        {DESKTOP_ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            lottieSrc={icon.anim}
            onOpen={() => openWindowHandler(icon.id)}
          />
        ))}
      </div>

      {/* Music Player */}
      <MusicControl />

      {/* Window System */}
      <WindowManager
        openWindow={openWindow}
        closingWindow={closingWindow}
        closeWindow={closeWindowHandler}
      />
    </div>
  );
}