/* src/App.jsx */
import { useEffect, useRef, lazy } from "react";
import gsap from "gsap";
import "./App.css";

const Home = lazy(() => import("./home.jsx"))

export default function App() {
  const homeRef = useRef(null);

  // Entry animation
  useEffect(() => {
    if (!homeRef.current) return;

    gsap.fromTo(
      homeRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      id="app-root"
      className="gpu w-screen h-screen bg-black overflow-hidden"
    >
      <div ref={homeRef} className="w-full h-full">
        <Home />
      </div>
    </div>
  );
}