import React from 'react';
import Nav from "../Nav";
import '../components.scss'
import {useLocation} from "react-router-dom";
import Navigator from "../Navigator";

function Saha(props) {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <div className="saha-container">
            <Nav/>
            <div className="saha-main">
                <Navigator/>
                <h1>{regionName} 페이지</h1>
            </div>
        </div>
    );
}

export default Saha;