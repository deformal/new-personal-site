import React from "react";
import { DownloadButton, ProjectData } from "./types";
import npmLogo from "../images/npm.png";
import githubLogo from "../images/github.png";
import androidLogo from "../images/android.png"
import windowsLogo from "../images/windows.png"

const getLocalImage = (imagePath: string) => {
    if (imagePath.startsWith('/') || imagePath.startsWith('./') || imagePath.startsWith('../')) {
        return imagePath;
    }

    const imageMap: { [key: string]: string } = {
        'npm.png': npmLogo,
        'github.png': githubLogo,
        "windows.png": windowsLogo,
        "android.png": androidLogo
    };

    const filename = imagePath.split('/').pop() || imagePath;
    return imageMap[filename] || imagePath;
};

const Download = (props: DownloadButton) => {
    const getDownloadText = (type: string) => {
        switch (type) {
            case "android":
                return "Download APK";
            case "pc":
                return "Download PC";
            case "npm":
                return "npm";
            default:
                return "Download";
        }
    };
    return (
        <a type="button" className="download_btn" href={props.link}>
            <img className="git_img" src={getLocalImage(props.logo)} alt={`${props.type} logo`} />
            {getDownloadText(props.type)}
        </a>
    );
};

const Github = (props: { link: string }) => {
    return (
        <a className="git_link" href={props.link} target="_blank">
            <img
                className="git_img"
                src={getLocalImage('github.png')}
                alt=""
            />
            Github
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
                        <div className="prj_info">
                            <h4 className="prj_name">{node.name}</h4>
                            <h4 className="prj_description">{node.description}</h4>
                            <div className="prj_stack">
                                {node.stack.split(',').map((tech, index) => (
                                    <span key={index} className="tech-badge">
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                            <h4 className="prj_status" data-status={node.status.toLowerCase()}>{node.status}</h4>
                            {node.github && <Github link={node.github} />}
                            {node.downloads && node.downloads.length > 0 ? (
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
