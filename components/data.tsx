import { IGatsbyImageData } from "gatsby-plugin-image";
import Experience from "./experience";
import Projects from "./projects";
import { DataProps } from "./types";
import React from "react";
export default function Data(props: DataProps) {
  return (
    <>
      <Experience data={props.data} />
      <Projects data={props.data} />
    </>
  );
}
