// src/Home.jsx
import React, { Suspense, lazy } from "react";
import Wallpaper from "./components/Wallpaper";
import DesktopIcon from "./components/DesktopIcon";
import MusicControl from "./components/MusicControl";
import styles from "./styles/home.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import SleepingCat from "./assets/Sleeping-cat.json";
import AboutLottie from "./assets/About-me.json";
import WorkLottie from "./assets/work-lottie.json";
import LinksLottie from "./assets/Links.json";
import ContactLottie from "./assets/Contact.json";
import FaqLottie from "./assets/Faq.json";
import beeFlower from "./assets/bee-flower.json";

// Lazy-load the windows so main bundle stays small
const WorkWindow = lazy(() => import("./components/WORK_Window"));
const AboutWindow = lazy(() => import("./components/About_Window"));
const LinkWindow = lazy(() => import("./components/Link_Window"));
const ContactWindow = lazy(() => import("./components/CONTACT_Window"));
const FaqWindow = lazy(() => import("./components/Faq_Window"));

export default function Home() {
  const [openWindow, setOpenWindow] = React.useState(null);
  const [closingWindow, setClosingWindow] = React.useState(null);
  const open = (name) => {
    setOpenWindow(name);
  };
  const close = (name) => {
    setClosingWindow(name);
    // small timeout to allow closing animation to run (kept behavior similar to original)
    setTimeout(() => {
      setOpenWindow((prev) => (prev === name ? null : prev));
      setClosingWindow(null);
    }, 300);
  };

  const ICONS = [
    { id: "work", label: "Projects", anim: WorkLottie },
    { id: "about", label: "About Me", anim: AboutLottie },
    { id: "links", label: "Links", anim: LinksLottie },
    { id: "contact", label: "Contact", anim: ContactLottie },
    { id: "faq", label: "FAQ", anim: FaqLottie }
  ];

  return (
    <div className={styles.root}>
      <Wallpaper />
          <button
            aria-label="Change wallpaper"
            className={styles.catButton}
            onClick={() => {
            window.dispatchEvent(new CustomEvent("pie:cycleWallpaper"));
            }}
          >
          <Player
            autoplay
            loop
            src={SleepingCat}
            style={{ width: "100%", height: "100%" }}
          />
          </button>

      {/* Desktop icons row */}
    <div className={styles.iconRow}>
      {ICONS.map((icon) => (
        <DesktopIcon
          key={icon.id}
          id={icon.id}
          label={icon.label}
          lottieSrc={icon.anim}
          onOpen={() => {
            window.dispatchEvent(new CustomEvent("pie:openSound"));
            open(icon.id);
          }}
        />
      ))}
    </div>

      {/* Music control (keeps audio asset names) */}
      <MusicControl />

      {/* Windows (lazy) */}
      <div aria-live="polite" className={styles.windowHost}>
        <Suspense fallback={null}>
          {openWindow === "work" && (
            <div
              className={styles.modalWrapper}
              data-closing={closingWindow === "work"}
            >
              <WorkWindow />

              {/* 🐝 Bee Flower Close Button */}
              <button
                aria-label="Close work window"
                className={styles.closeBee}
                onClick={() => close("work")}
              >
              <Player
                autoplay
                loop
                src={beeFlower}
                className={styles.beePlayer}
              />
              </button>
            </div>
          )}

          {openWindow === "about" && (
              <div
                className={styles.modalWrapper}
                data-closing={closingWindow === "about"}
              >
                <AboutWindow />

                {/* 🐝 Bee Flower Close Button */}
                <button
                  aria-label="Close about window"
                  className={styles.closeBee}
                  onClick={() => close("about")}
                >
                  <Player
                    autoplay
                    loop
                    src={beeFlower}
                    className={styles.beePlayer}
                  />
                </button>
              </div>
            )}

          {openWindow === "links" && (
            <div
              className={styles.modalWrapper}
              data-closing={closingWindow === "links"}
            >
              <LinkWindow isVisible onClose={() => close("links")} />
            {/* 🐝 Bee Flower Close Button */}
              <button
                aria-label="Close links window"
                className={styles.closeBee}
                onClick={() => close("links")}
              >
                <Player
                  autoplay
                  loop
                  src={beeFlower}
                  className={styles.beePlayer}
                />
              </button>
            </div>
          )}

         {openWindow === "contact" && (
            <div
              className={styles.modalWrapper}
              data-closing={closingWindow === "contact"}
            >
              <ContactWindow />

              {/* 🐝 Bee Flower Close Button */}
              <button
                aria-label="Close contact window"
                className={styles.closeBee}
                onClick={() => close("contact")}
              >
                <Player
                  autoplay
                  loop
                  src={beeFlower}
                  className={styles.beePlayer}
                />
              </button>
            </div>
          )}

          {openWindow === "faq" && (
            <div
              className={styles.modalWrapper}
              data-closing={closingWindow === "faq"}
            >
              <FaqWindow />

            {/* 🐝 Bee Flower Close Button */}
                <button
                  aria-label="Close FAQ window"
                  className={styles.closeBee}
                  onClick={() => close("faq")}
                >
                  <Player
                    autoplay
                    loop
                    src={beeFlower}
                    className={styles.beePlayer}
                  />
                </button>
              </div>
            )}
        </Suspense>
      </div>
      {/* small global style animations kept in home.module.css */}
    </div>
  );
}