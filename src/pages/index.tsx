import React from "react";
import LandingSection from "../../components/landingSection";
import Profile from "../../components/profile";
import Experience from "../../components/experience";
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
              allImageSharp {
                edges {
                  node {
                    gatsbyImageData
                  }
                }
              }
            }
          `}
          render={(data) => <Experience data={data} />}
        />
      </main>
      <br />
    </div>
  );
}
