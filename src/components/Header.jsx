import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBurger, faBars } from "@fortawesome/free-solid-svg-icons";
import './scripts/sidebar.js'
import './static/header.css'
import slideBar from "./scripts/sidebar.js";

export default function header() {
    return(
        <div className="header__inner">
            <FontAwesomeIcon className="burger" icon={faBurger} size="2x"/>
            <h1 className="title">CUIMBO test</h1>     
            <FontAwesomeIcon icon={faUser} size="2x"/>
        </div>
    )
}