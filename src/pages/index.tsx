import React from "react";
import LandingSection from "../components/landingSection";
import Profile from "../components/profile";
import Data from "../components/data";
import { SEO } from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import "./style.css";
import { mainQuery } from "../graphql/main-query";
// https://s3.ap-south-1.amazonaws.com/saurabhjainwal.dev/IMG_3741.JPG
export default function Home() {
  return (
    <div className="app">
      <header>
        <LandingSection />
      </header>
      <div className="main-content">
        <StaticQuery
          query={mainQuery()}
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
