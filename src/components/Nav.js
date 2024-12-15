import React from 'react';
import icon from '../../src/img/icon.svg'
import {Link} from "react-router-dom";
import {busanRegion} from "./busanRegion";
import './components.scss'


function Nav(props) {

    return (
        <div className="navbar-container">
            <div className="navbar-main">
                <div className="flex-1">
                    <Link to="/"> <img src={icon} alt=""/> </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {/*<li><Link to="/regions">지역</Link></li>*/} {/*추구 추가할 부분*/}
                        <li>
                            <details>
                                <summary>지역</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    {busanRegion && Object.values(busanRegion).map((item) => (
                                        <li key={item.id}>
                                            <Link to={`/regions/${item.id}`}
                                                  state={{regionName: item.alert}}>{item.alert}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;