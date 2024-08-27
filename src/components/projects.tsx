import React, { useState } from "react";
import { DataProps, DownloadButton, ProjectData } from "./types";
const Download = (props: DownloadButton) => {
  return (
    <a type="button" className="download_btn" href={props.link}>
      <img className="git_img" src={props.logo} alt="" />
      Download
    </a>
  );
};
const Link = (props: { link: string }) => {
  return (
    <a className="git_link" href={props.link} target="_blank">
      <img
        className="git_img"
        src="https://wave-runner.s3.ap-south-1.amazonaws.com/github.png"
        alt=""
      />
      GitHub
    </a>
  );
};
export default function Projects(props: { data: ProjectData }) {
  return (
    <div id="projects" className="projects">
      <h1 className="prj_title">Projects 📽</h1>
      <div className="prjdiv">
        {props.data.allProjectJson.nodes.map((node) => (
          <div className="prj" key={node.id}>
            <img className="prj_img" src={node.logo} alt="" />
            <div className="prj_info">
              <h4 className="prj_name">{node.name}</h4>
              <h4 className="prj_description">{node.description}</h4>
              {node.links ? (
                <Link link={node.links} />
              ) : node.downloads ? (
                node.downloads.map((x, index: number) => (
                  <Download
                    link={x.link}
                    type={x.type}
                    key={`${node.id}_${index}`}
                    logo={x.logo}
                  />
                ))
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
