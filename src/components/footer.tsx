import React, { useState } from "react";
import { FooterData } from "./types";
import twitter from "../images/x.png";

export default function Footer(props: { data: FooterData }) {
  const [data] = useState<FooterData>(props.data);
  return (
    <div id="social" className="social_div">
      <h1 className="social_title">Let's Con ✌️</h1>
      <div className="socials">
        {data.allContactJson.nodes.map((node) => (
          <div className="social" key={node.id}>
            <a
              className="social"
              key={node.id}
              href={node.link}
              target="_blank"
            >
              <img src={twitter} alt="no_picture" className="social_img" />
            </a>
          </div>
        ))}
      </div>
      <div className="social_message">
        <p className="cpy">👋 Copyright © 2022 Saurabh Jainwal</p>
        <p>All Rights Reserved.</p>
        <p className="social_gatsby">
          Built with <a href="gatsbyjs.com">Gatsby</a>
        </p>
      </div>
    </div>
  );
}
