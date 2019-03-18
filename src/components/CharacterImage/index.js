import React from "react";
import "./style.css";

function CharacterImage(props){
    return(
        <div className="character-holder">
            <img alt={props.alt} src={props.image} id={props.id}/>
        </div>
    );
}

export default CharacterImage