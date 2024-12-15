import React from 'react';
import Nav from "../Nav";
import {useLocation} from "react-router-dom";
import Navigator from "../Navigator";

function Yeonje(props) {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <div className="yeonje-container">
            <Nav/>
            <div className="yeonje-main">
                <Navigator/>
                <h1>{regionName} 페이지</h1>
            </div>
        </div>
    );
}

export default Yeonje;