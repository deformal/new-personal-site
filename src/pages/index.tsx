import React, { useEffect, useState } from "react";
import LandingSection from "../../components/landingSection";
import Profile from "../../components/profile";
import Data from "../../components/data";
import "./style.css";
import me from "../images/me.png";
import { StaticQuery, graphql } from "gatsby";
export default function Home() {
  return (
    <div className="app">
      <header>
        <LandingSection />
      </header>
      <aside>
        <Profile imageref={me} />
      </aside>
      <main>
        <StaticQuery
          query={graphql`
            query {
              allExpJson {
                nodes {
                  job_type
                  name
                  link
                  dates
                  id
                  role
                  logo
                }
              }
              allProjectJson {
                nodes {
                  id
                  name
                  description
                  stack
                  links
                  logo
                  downloads {
                    link
                    type
                    logo
                  }
                }
              }
              allContactJson {
                nodes {
                  id
                  logo
                  link
                  social
                }
              }
              allImageSharp {
                edges {
                  node {
                    gatsbyImageData
                  }
                }
              }
            }
          `}
          render={(data) => <Data data={data} />}
        />
      </main>
      <br />
    </div>
  );
}
export const Head = () => {
  return (
    <>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://wave-runner.s3.ap-south-1.amazonaws.com/gitProfile.ico"
      />
      <title>saurabhjainwalapi.in</title>
    </>
  );
};
