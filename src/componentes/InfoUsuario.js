import React from "react";
import img from "./img/pngwing.com.png"

export function InfoUsuario(){
    return(
        <div className="usuario">
            <img className="video-img" src={img}></img>
            <span>Username</span>
        </div>
    )
}