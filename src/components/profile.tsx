import React, { useEffect } from "react";
import { FooterData } from "./types";
import { StaticQuery, graphql } from "gatsby";
import myImage from "../images/me-ghibli.png";

type TlandingPageProps = {
    contactData?: FooterData;
    profileData?: any;
};

export default function Profile(props: TlandingPageProps) {
    console.log('Profile component rendered');
    console.log('Profile data:', props.profileData);

    const profile = props.profileData?.allProfileJson?.nodes?.[0];

    useEffect(() => {
        const projectsSection = document.querySelector('.projects');
        const expsSection = document.querySelector('.exps');

        if (projectsSection && expsSection) {
            projectsSection.addEventListener('mouseenter', () => {
                expsSection.classList.add('blurred');
            });

            projectsSection.addEventListener('mouseleave', () => {
                expsSection.classList.remove('blurred');
            });
        }

        return () => {
            if (projectsSection && expsSection) {
                projectsSection.removeEventListener('mouseenter', () => {
                    expsSection.classList.add('blurred');
                });
                projectsSection.removeEventListener('mouseleave', () => {
                    expsSection.classList.remove('blurred');
                });
            }
        };
    }, []);

    return (
        <div className="profilediv">
            <div className="image">
                <img
                    src={myImage}
                    alt="Saurabh Jainwal Profile"
                    onLoad={() => {
                        console.log('Profile image loaded successfully');
                    }}
                    onError={(e) => {
                        console.error('Profile image failed to load');
                        console.error('Error event:', e);
                    }}
                />

            </div>
            <div className="info">
                <div className="greeting">{profile?.greeting || "Hey there 👋 I'm Saurabh Jainwal"}</div>
                <div className="sub_greeting">
                    {profile?.sub_greeting || "Just a passionate individual who love to code 💻 and solve problems with it. Love ❤️ to cook and play cricket 🏏."}
                </div>
            </div>

            {props.contactData && (
                <div className="contact-section">
                    <h3 className="contact-title">Let's Connect ✌️</h3>
                    <div className="socials">
                        {props.contactData.allContactJson.nodes.map((node) => (
                            <div className="social" key={node.id}>
                                <a
                                    className="social"
                                    href={node.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={node.logo} alt="social" className="social_img" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
