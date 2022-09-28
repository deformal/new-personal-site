import React, { useState } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { DataProps, ExperienceData } from "./types";
export default function Experience(props: { data: ExperienceData }) {
  return (
    <div id="experience" className="exps">
      <h1 className="exp_title">
        Experience{" "}
        <span className="exp_sidenote">(just getting started 💪)</span>{" "}
      </h1>
      <div className="experiencediv">
        {props.data.allExpJson.nodes.map((node) => (
          <div className="experience" key={node.id}>
            <img
              src={node.logo}
              className="exp_img"
              alt="sorry no image available"
            />
            <div className="exp_info">
              <h4 className="exp_name">{node.name}</h4>
              <h4 className="exp_date">{node.dates}</h4>
              <h4 className="exp_role">{node.role}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
