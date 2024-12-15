import React from 'react';
import Nav from "../Nav";
import {useLocation} from "react-router-dom";
import Navigator from "../Navigator";
import '../components.scss'


function Gijang() {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <div className="gijang-container">
            <Nav/>
            <div className="gijang-main">
                <Navigator/>
                <h1>{regionName} 페이지</h1>
            </div>
        </div>
    );
}

export default Gijang;