import React from 'react';
import {Link} from "react-router-dom";
import Nav from "../Nav";

function Regions(props) {
    return (
        <div className="regions-container">
            <Nav/>
            <div className="regions-main">
                <div className="breadcrumbs text-m">
                    <ul>
                        <li><Link to="/">홈</Link></li>
                        <li>지역</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Regions;