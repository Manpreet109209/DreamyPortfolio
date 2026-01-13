import React, { useCallback } from "react";
import emailImage from "../assets/email.png";
import "../styles/contactWindow.css";

const EMAIL_CONFIG = {
  to: "piewhispers@gmail.com",
  subject: "Let's Collab",
};

const ContactWindow = () => {
  const handleOpenEmail = useCallback(() => {
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      EMAIL_CONFIG.to
    )}&su=${encodeURIComponent(EMAIL_CONFIG.subject)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section className="contact-window" aria-labelledby="contact-title">
      {/* 🌸 Top Bar */}
      <header className="contact-window__topbar">
        <h1 id="contact-title" className="contact-window__title">
          CONTACT – <span>Manpreet</span>
        </h1>
      </header>

      {/* 💌 Content */}
      <div className="contact-window__content">
        {/* 📜 Text Section */}
        <div className="contact-window__text">
          <p>
            <strong>
              Wanna reach out to the brain ? <br /> or heart behind all this magic?
            </strong>
          </p>
          <p>I’m just one message away!</p>
          <p>
            Whether you’ve got a <strong>question</strong> <br />, an{" "}
            <strong>idea</strong>,
            <br />
            or just wanna <strong>say hi</strong>
            <br />
            <em>Click onto that image over there</em>
            <br />
            & slide into my inbox
          </p>

          <p className="contact-window__highlight">
            <strong>Let’s make something amazing together...</strong>
          </p>

          <p className="contact-window__note">
            I don’t usually check DMs on social media,
            <br />
            <span>so email is the best way to reach me.</span>
          </p>
          <br />
          <br />
        </div>

        {/* 💌 Email Image */}
        <button
          type="button"
          className="contact-window__email"
          onClick={handleOpenEmail}
          aria-label="Open email composer"
        >
          <img
            src={emailImage}
            alt="Email"
            title="Click to Email"
            loading="lazy"
          />
        </button>
      </div>
    </section>
  );
};

export default React.memo(ContactWindow);