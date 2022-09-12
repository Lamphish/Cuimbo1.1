import React from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateIcon from '@mui/icons-material/Create';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import './static/sidebar.css'

export default function App(){
    return(
        <div id="sidebar">
                <ul className="contentList">
                    <li><h2 className="content contentTitle">Dora the Explorer</h2></li>
                    <li><div className="contentFlex"><CreateIcon sx={{color:"rgba(255,168,96,1)"}}/><h3 className="content">Playground</h3></div></li>
                    <li><div className="contentFlex"><InfoOutlinedIcon sx={{color:"rgba(255,168,96,1)"}}/><h3 className="content">About Us</h3></div></li>
                    <li><div className="contentFlex"><LocalPoliceIcon sx={{color:"rgba(255,168,96,1)"}}/><h3 className="content">Impressum</h3></div></li>
                </ul>
        </div>

    )
}