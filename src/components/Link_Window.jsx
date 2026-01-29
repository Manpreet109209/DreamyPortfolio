import { useState, useCallback } from "react";
import youtubeIcon from "../assets/youtube.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import styles from "../styles/linkWindow.module.css";

const LINKS = {
  youtube: [
    { label: "My Edits", url: "https://www.youtube.com/@Editzwhisper" },
  ],
  github: [{ label: "GitHub", url: "https://github.com/Manpreet109209" }],
  linkedin: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/manpreet-se/" },
  ],
};

const ICONS = {
  youtube: youtubeIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
};

export default function LinkWindow({ isVisible }) {
  const [activePopup, setActivePopup] = useState(null);
  const [bouncingIcon, setBouncingIcon] = useState(null);

  const handleIconClick = useCallback((platform) => {
    setActivePopup(activePopup === platform ? null : platform);

    // Trigger bounce animation
    setBouncingIcon(platform);
    const timer = setTimeout(() => setBouncingIcon(null), 600);
    return () => clearTimeout(timer);
  }, [activePopup]);

  if (!isVisible) return null;

  return (
    <section className={styles.window} aria-label="Link Window">
      {/* Top Bar */}
      <header className={styles.topbar} aria-hidden="true" />

      {/* Title */}
      <h2 className={styles.title}>
        Manpreet&apos;s <span>links</span>
      </h2>

      {/* Icons Row */}
      <div className={styles.iconRow}>
        {Object.entries(LINKS).map(([platform, list]) => (
          <div key={platform} className={styles.iconWrap}>
            <button
              type="button"
              className={`${styles.iconButton} ${
                bouncingIcon === platform ? styles.isBouncing : ""
              }`}
              onClick={() => handleIconClick(platform)}
              aria-haspopup="true"
              aria-expanded={activePopup === platform}
              aria-label={`Open ${platform} links`}
            >
              <img src={ICONS[platform]} alt={platform} />
            </button>

            {activePopup === platform && (
              <div className={styles.popup} role="menu">
                {list.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Bubble */}
      <div className={styles.bubble}>
        Happy to see you here!
      </div>
    </section>
  );
}