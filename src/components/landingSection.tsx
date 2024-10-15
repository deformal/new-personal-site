import React, { useEffect, useState } from "react";
const Menu = (props: { className: boolean }) => {
  const downloadResume = async () => {};
  return (
    <div className={props.className ? "routes_min" : "routes"}>
      <a href="#experience" className={props.className ? "route_min" : "route"}>
        Experience 📖
      </a>
      <a href="#projects" className={props.className ? "route_min" : "route"}>
        Projects ⚙️
      </a>
      <a href="#social" className={props.className ? "route_min" : "route"}>
        Contact 📇
      </a>
      <a
        href="https://s3.ap-south-1.amazonaws.com/saurabhjainwal.dev/resume.pdf"
        target={"_blank"}
        className={props.className ? "route_min" : "route"}
      >
        Resume 🧾
      </a>
    </div>
  );
};
const Burger = () => {
  const [active, setActive] = useState<boolean>(false);
  const handler = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <div className="menu">
      <h1 className="flash" onClick={handler}>
        🔦
        {active ? <Menu className={true} /> : ""}
      </h1>
    </div>
  );
};
export default function LandingSection() {
  const [currentWidth, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [currentWidth]);

  return (
    <div className="navdiv">
      <nav className="nav">
        <a href="#" className="brand">
          Saurabh Jainwal
        </a>
        {currentWidth < 1550 ? <Burger /> : <Menu className={false} />}
      </nav>
    </div>
  );
}
