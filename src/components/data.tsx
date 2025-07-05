import Experience from "./experience";
import Projects from "./projects";
import {DataProps} from "./types";
import React from "react";

export default function Data(props: DataProps) {
    return (
        <div>
            <Projects data={props.data}/>
            <Experience data={props.data}/>
        </div>
    );
}
