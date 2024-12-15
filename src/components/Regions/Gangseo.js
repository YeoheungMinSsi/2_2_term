import React from 'react';
import Nav from "../Nav";
import Navigator from "../Navigator";
import {useLocation} from "react-router-dom";

function Gangseo() {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <div className="gangseo-container">
            <Nav/>
            <div className="gangseo-main">
                <Navigator/>
                <h1>{regionName} 페이지</h1>
            </div>
        </div>
    );
}

export default Gangseo;