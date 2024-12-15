import React from 'react';
import Nav from "../Nav";
import Navigator from "../Navigator";
import {useLocation} from "react-router-dom";

function Dongnae() {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <div className="busanjin-container">
            <Nav/>
            <div className="busanjin-main">
                <Navigator/>
                <h1>{regionName} 페이지</h1>
            </div>
        </div>
    );
}

export default Dongnae;