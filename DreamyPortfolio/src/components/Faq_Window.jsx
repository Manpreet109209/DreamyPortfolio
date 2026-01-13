import { useState } from "react";
import "../styles/faqWindow.css";

const faqs = [
  {
    q: "❓ Who are you and what do you do?",
    a: (
      <>
        I’m Manpreet, a student and aspiring <strong>a future software engineer </strong> 
        focused on building clean, <strong> maintainable, </strong> 
        and <strong> user-friendly </strong>web applications. 
        I enjoy turning ideas into working systems rather than just writing code that 
        “looks good".
      </>
    ),
  },
  {
    q: "❓ Is this portfolio built from a template?",
    a: (
      <>
        No. The structure, architecture, and interaction logic are custom-built. 
        While I’ve used tools and references along the way, the design and 
        <strong>implementation decisions are my own.</strong>
      </>
    ),
  },
  {
    q: "❓ Did you use AI to build this?",
    a: (
      <>
        Yes, <strong>as a tool.</strong> AI helped with learning, 
        debugging, and responsiveness polishing. The architecture, 
        layout decisions, and final implementation were done intentionally by me. 
        <br /> I treat AI the same way a developer treats 
        <strong>documentation</strong> or <strong>Stack Overflow.</strong>
      </>
    ),
  },
  {
    q: "❓ Why does this portfolio look playful instead of corporate?",
    a: (
      <>
        This is a <strong>personal portfolio</strong>, 
        not a company website. I wanted it to reflect my personality 
        while still being structured, responsive, and production-minded 
        <strong>under the hood.</strong>
      </>
    ),
  },
  {
    q: "❓ Is this portfolio responsive on mobile devices?",
    a: <>Yes. The layout adapts across screen sizes using 
    responsive CSS rather than device-specific hacks.</>,
  },
  {
    q: "❓ What technologies did you use?",
    a: (
      <>
        Primarily: <strong>React, Modern CSS (Flexbox, media queries, responsive units) 
          Vite, JavaScript</strong> <br /> I focus more on 
          <strong> understanding fundamentals</strong> than collecting buzzwords.
      </>
    ),
  },
  {
    q: "❓ Why are there OS-style windows and icons?",
    a: (
      <>
        The interface is inspired by desktop environments to keep content organized 
        and intuitive. It also allows me to scale features 
        <strong> without turning the layout into a long scrolling page.</strong>
      </>
    ),
  },
  {
    q: "❓ Are all the projects here production-ready?",
    a: (
      <>
        Some are experiments, some are learning projects, 
        and some are production-level. Each project exists 
        <strong> because it taught me something meaningful.</strong>
      </>
    ),
  },
  {
    q: "❓ Are you available for collaboration or freelance work?",
    a: (
      <>
        I’m open to learning opportunities, collaborations, 
        and discussions. <strong>For now,<strong> <a href="https://mail.google.com/mail/u/0/?to=piewhispers@gmail.com&su=Let%27s+Collab&fs=1&tf=cm" target="_blank">email</a></strong> is the best way to reach me.</strong>
      </>
    ),
  },
  {
    q: "❓ Why should someone take you seriously as a 17-year-old?",
    a: (
      <>
        Because I focus on understanding systems, 
        fixing problems, and improving code instead of copying-pasting solutions. 
        <strong> Growth matters more to me than shortcuts.</strong>
      </>
    ),
  },
  {
    q: "❓ What are you currently learning?",
    // specialGap: true,
    a: (
      <>
        I'm currently studying Data structures, 
        problem-solving, full-stack fundamentals, 
        and improving my communication skills, and am preparing for ielts exam.
      </>
    ),
  },
];

export default function FaqWindow() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-window">
      <header className="faq-window__topbar">
        <h2 className="faq-window__title">
          FAQ – <span>Real Ones Only</span>
        </h2>
      </header>

      <div className="faq-window__content">
        {faqs.map((item, index) => (
          <div
              key={index}
              className={`faq-item ${
                item.specialGap ? "faq-item--spaced" : ""
              } ${openIndex === index ? "open" : ""}`}
            >
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              {item.q}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>

            <div className="faq-answer">
              <div className="faq-answer__inner">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}