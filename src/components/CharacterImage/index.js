import React from "react";
import "./style.css";

function CharacterImage(props){
    return(
        <span onClick={() => props.clickImage(props.id)} className="character-holder">
            <img alt={props.alt} src={props.image} id={props.id}/>
        </span>
    );
}

export default CharacterImage