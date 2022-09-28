import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
export default function Experience(props: { data: any }) {
  const data = props.data as {
    allExpJson: {
      nodes: Array<{
        id: string;
        name: string;
        link: string;
        role: string;
        dates: string;
        job_type: string;
        logo: any | IGatsbyImageData;
      }>;
    };
    allImageSharp: any;
  };
  let final = [];
  for (const exp of data.allExpJson.nodes) {
    for (const image of data.allImageSharp.edges) {
      if (
        (image.node.gatsbyImageData.images.fallback.src as string).includes(
          exp.logo
        )
      ) {
        let x = exp;
        x.logo = image.node as IGatsbyImageData;
        final.push(x);
      }
    }
  }
  return (
    <div id="experience" className="exps">
      <h1 className="exp_title">
        Experience{" "}
        <span className="exp_sidenote">(just getting started 💪)</span>{" "}
      </h1>
      <div className="experiencediv">
        {final.map((node) => (
          <div className="experience" key={node.id}>
            <GatsbyImage
              className="exp_img"
              image={node.logo.gatsbyImageData as IGatsbyImageData}
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
