import React, { useEffect, useState } from "react";
const Burger = () => {
  return (
    <div className="menu">
      <h1 className="flash">🔦</h1>
    </div>
  );
};
export default function LandingSection() {
  const [currentWidth, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [currentWidth]);

  return (
    <div className="navdiv">
      <nav className="nav">
        <div className="brand">Saurabh Jainwal</div>
        {currentWidth < 1000 ? (
          <Burger />
        ) : (
          <div className="routes">
            <div className="route">Experience</div>
            <div className="route">Projects</div>
            <div className="route">Contact</div>
          </div>
        )}
      </nav>
    </div>
  );
}
