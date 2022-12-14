import React, { useEffect, useState } from "react";
const Menu = (props: { className: boolean }) => {
  const downloadResume = async () => {};
  return (
    <div className={props.className ? "routes_min" : "routes"}>
      <a href="#experience" className={props.className ? "route_min" : "route"}>
        Experience ๐
      </a>
      <a href="#projects" className={props.className ? "route_min" : "route"}>
        Projects โ๏ธ
      </a>
      <a href="#social" className={props.className ? "route_min" : "route"}>
        Contact ๐
      </a>
      <a
        href="https://wave-runner.s3.ap-south-1.amazonaws.com/SaurabhCV.pdf"
        target={"_blank"}
        className={props.className ? "route_min" : "route"}
      >
        Resume ๐งพ
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
        ๐ฆ
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
