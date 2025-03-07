import Experience from "./experience";
import Projects from "./projects";
import {DataProps} from "./types";
import Footer from "./footer";
import React from "react";

export default function Data(props: DataProps) {
    return (
        <div>
            <Experience data={props.data}/>
            <Projects data={props.data}/>
            <Footer data={props.data}/>
        </div>
    );
}
