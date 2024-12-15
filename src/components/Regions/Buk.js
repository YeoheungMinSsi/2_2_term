import React from 'react';
import Nav from "../Nav";
import Navigator from "../Navigator";
import {useLocation} from "react-router-dom";
import '../components.scss'

function Buk(region) {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <div className="buk-container">
            <Nav/>
            <div className="buk-main">
                <Navigator/>
                <h1>{regionName} 페이지</h1>
            </div>
        </div>
    );
}

export default Buk;