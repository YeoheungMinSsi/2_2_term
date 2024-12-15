import React,{ useState,useCallback }  from 'react';
import Nav from "./Nav";
import BusanIcon from "./BusanIcon";
import BusanMap from './BusanMap'
import './components.scss'

import MainCard from './Cards/MainCard';


function Home(props) {
    const [region, setRegion] = useState('')
    // const [selectedRegion, setSelectedRegion] = useState(null)

    // 지도에서 마우스 hover시 색이 변하고 해당 지역의 지역명(region)을 받아오는 함수
    const handleShowRegion = useCallback((alertValue) => {
        setRegion(alertValue);
        console.log(alertValue);
    }, []);


    return (
        <div className="home-container">
            <Nav/>
            <div className="home-main">
                <div className="home-main-content1">
                    <div className="busan-icon-container">
                        <BusanIcon />
                    </div>
                </div>
                <div className="home-main-content2">
                    <div className='busanmap-container'>
                        <BusanMap handleShowRegion={handleShowRegion}/>
                    </div>
                    <div className='card-container'>
                        <h1 className="card-container-regionname">{region} 지역</h1>
                        <MainCard region={region}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

