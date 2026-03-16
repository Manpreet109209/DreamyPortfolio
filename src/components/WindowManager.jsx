// src/components/WindowManager.jsx

import React, { Suspense, lazy } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "../styles/home.module.css";
import beeFlower from "../assets/bee-flower.json";

/*
  Lazy loading ensures that each window component is loaded
  only when needed. This keeps the main bundle small and
  improves the initial page load performance.
*/
const WorkWindow = lazy(() => import("./WORK_Window"));
const AboutWindow = lazy(() => import("./About_Window"));
const LinkWindow = lazy(() => import("./Link_Window"));
const ContactWindow = lazy(() => import("./CONTACT_Window"));
const FaqWindow = lazy(() => import("./Faq_Window"));

/*
  Window registry

  Instead of writing five separate conditional blocks,
  we map window IDs to their corresponding components.
  This makes the system easier to scale and maintain.
*/
const WINDOW_COMPONENTS = {
  work: WorkWindow,
  about: AboutWindow,
  links: LinkWindow,
  contact: ContactWindow,
  faq: FaqWindow,
};

export default function WindowManager({ openWindow, closeWindow, closingWindow }) {

  // Determine which window component should render
  const ActiveWindow = openWindow ? WINDOW_COMPONENTS[openWindow] : null;

  return (
    <div aria-live="polite" className={styles.windowHost}>
      {/* 
        Suspense handles lazy-loaded components.
        While the component is downloading, React can
        temporarily render a fallback UI.
      */}
      <Suspense fallback={null}>
        {ActiveWindow && (
          <WindowWrapper
            name={openWindow}
            closingWindow={closingWindow}
            closeWindow={closeWindow}
          >
            {/* 
              Special case:
              LinkWindow expects props controlling visibility
              and close behavior.
            */}
            {openWindow === "links" ? (
              <ActiveWindow
                isVisible
                onClose={() => closeWindow("links")}
              />
            ) : (
              <ActiveWindow />
            )}
          </WindowWrapper>
        )}
      </Suspense>
    </div>
  );
}

/*
  WindowWrapper

  This component provides shared window UI logic:
  - animation state
  - close button
  - styling wrapper

  All window content is injected through `children`.
*/
function WindowWrapper({ children, name, closingWindow, closeWindow }) {
  return (
    <div
      className={styles.modalWrapper}

      /*
        data-closing allows CSS animations to trigger when
        a window is being closed.
      */
      data-closing={closingWindow === name}
    >
      {/* Window content */}
      {children}

      {/* 
        Custom close button using the animated bee asset.
        The button calls the parent close handler.
      */}
      <button
        aria-label={`Close ${name} window`}
        className={styles.closeBee}
        onClick={() => closeWindow(name)}
      >
        <Player
          autoplay
          loop
          src={beeFlower}
          className={styles.beePlayer}
        />
      </button>
    </div>
  );
}