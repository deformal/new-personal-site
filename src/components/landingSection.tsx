import React from "react";

const Menu = () => {
  const downloadResume = async () => {};
  return (
    <div className="routes">
      <a href="#experience" className="route">
        Experience
      </a>
      <a href="#projects" className="route">
        Projects
      </a>
      <a
        href="https://s3.ap-south-1.amazonaws.com/saurabhjainwal.dev/resume+-+new.pdf"
        target={"_blank"}
        className="route"
      >
        Resume
      </a>
    </div>
  );
};

export default function LandingSection() {
  return (
    <div className="navdiv">
      <nav className="nav">
        <a href="#experience" className="brand">
          /deformal - saurabh jainwal
        </a>
        <Menu />
      </nav>
    </div>
  );
}
