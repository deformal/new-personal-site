import React from "react";
import LandingSection from "../components/landingSection";
import Profile from "../components/profile";
import Data from "../components/data";
import { SEO } from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import "./style.css";
// https://s3.ap-south-1.amazonaws.com/saurabhjainwal.dev/IMG_3741.JPG
export default function Home() {
  return (
    <div className="app">
      <header>
        <LandingSection />
      </header>
      <div className="main-content">
        <StaticQuery
          query={graphql`
            query AllData {
              allContactJson {
                nodes {
                  id
                  logo
                  link
                  social
                }
              }
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
                  status
                  links
                  logo
                  downloads {
                    link
                    type
                    logo
                  }
                }
              }
              allProfileJson {
                nodes {
                  name
                  image
                  greeting
                  sub_greeting
                }
              }
            }
          `}
          render={(data) => (
            <>
              <aside className="profile-section">
                <Profile
                  contactData={data}
                  profileData={data}
                />
              </aside>
              <main className="content-section">
                <Data data={data} />
              </main>
            </>
          )}
        />
      </div>
    </div>
  );
}
export const Head = () => {
  return <SEO />;
};
