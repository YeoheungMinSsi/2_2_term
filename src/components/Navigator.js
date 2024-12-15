import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Navigator() {
    const location = useLocation();
    const {regionName} = location.state;

    return (
        <>
            <div className="breadcrumbs text-m">
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/regions">지역</Link></li>
                    <li>{regionName}</li>
                </ul>
            </div>
        </>
    );
}

export default Navigator;