import React from "react";
import "./style.css";
import { tsPropertySignature } from "@babel/types";

function Pics(props){
    return(
       
        <div 
        role="img"
        onClick ={()=>props.handleClick(props.id)}
        src={props.image}
        
        />

    )
}
export default Pics