import React from 'react';
import Nav from "../Nav";
import {useLocation} from "react-router-dom";
import Navigator from "../Navigator";

function Geumjeong(props) {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <div className="geumjeong-container">
            <Nav/>
            <div className="geumjeong-main">
                <Navigator/>
                <h1>{regionName} 페이지</h1>
            </div>
        </div>
    );
}

export default Geumjeong;