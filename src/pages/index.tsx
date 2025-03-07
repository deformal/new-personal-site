import React from "react";
import LandingSection from "../components/landingSection";
import Profile from "../components/profile";
import Data from "../components/data";
import {SEO} from "../components/seo";
import {graphql, StaticQuery} from "gatsby";
import "./style.css";

export default function Home() {
    return (
        <div className="app">
            <header>
                <LandingSection/>
            </header>
            <aside>
                <Profile
                    imageref={"https://wave-runner.s3.ap-south-1.amazonaws.com/me.png"}
                />
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
            }
          `}
                    render={(data) => <Data data={data}/>}
                />
            </main>
            <br/>
        </div>
    );
}
export const Head = () => {
    return <SEO/>;
};
