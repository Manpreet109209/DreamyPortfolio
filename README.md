# 🌸 Dreamy Portfolio

A soft, OS-inspired personal portfolio built with **React**, featuring animated desktop icons, window-based navigation, and a calm, aesthetic user experience.

---

## ✨ Overview https://dreamyportfolio.netlify.app/

Dreamy Portfolio is a creative take on a personal website, designed to feel like a lightweight desktop environment rather than a traditional webpage.

Instead of scrolling through sections, users interact with **desktop icons** that open animated “windows” — creating a more engaging and playful experience.

---

## 🚀 Features

* 🖥️ **Desktop UI Experience**
  Interactive icons that open different sections like a mini operating system.

* 🪟 **Window-Based Navigation**
  Each section (Projects, About, Links, etc.) opens in its own animated window.

* ⚡ **Lazy Loading**
  Components load only when needed for better performance.

* 🎞️ **Smooth Animations**
  Powered by GSAP and Lottie for fluid transitions and micro-interactions.

* 🎵 **Music Control System**
  Built-in audio control for ambient user experience.

* 💌 **Interactive Contact Flow**
  Easy access to contact via animated UI elements.

---

## 🧠 Learning Goals

This project was built to:

* Strengthen **React fundamentals** (state, props, component architecture)
* Practice **scalable UI design patterns**
* Explore **animation systems** (GSAP + Lottie)
* Build a **non-traditional user experience**
* Understand **real-world debugging and integration challenges**

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript (ES6+)
* **Styling:** CSS Modules, Flexbox, Responsive Design
* **Animations:** GSAP, Lottie
* **Build Tool:** Vite

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── WindowManager.jsx
│   ├── DesktopIcon.jsx
│   ├── Wallpaper.jsx
│   ├── MusicControl.jsx
│   └── [Window Components]
│
├── styles/
│   └── CSS Modules
│
├── assets/
│   ├── Lottie animations
│   ├── Images
│
└── App.jsx
```

---

## 🪟 Window System Architecture

The app uses a **centralized window manager**:

* A single state (`openWindow`) controls which window is active
* Windows are dynamically mapped using a registry
* Components are lazy-loaded for performance
* A shared wrapper handles animations and close behavior

This approach keeps the system **scalable, maintainable, and React-friendly**

---

## ⚠️ Development Notes

During development, an external windowing library was tested but removed due to conflicts with React’s rendering model.

The final implementation uses a **fully React-controlled window system**, ensuring stability and predictable behavior.

---

## 📦 Installation

```bash
git clone https://github.com/your-username/dreamy-portfolio.git
cd dreamy-portfolio
npm install
npm run dev
```

---

## 📌 Future Improvements

* Draggable windows
* Window stacking (z-index management)
* Persistent state (remember open windows)
* Mobile UX optimization
* Theme customization

---

## 🧑‍💻 Author

**Manpreet Singh**

* GitHub: https://github.com/Manpreet109209
* LinkedIn: https://www.linkedin.com/in/manpreet-se/

---

## 💭 Final Note

This project represents not just a UI experiment, but a step toward building more **interactive and experience-driven web applications**.

---
