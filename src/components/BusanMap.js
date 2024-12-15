import React, {useState} from 'react';
import busanMapData from './BusanMapData';

function BusanMap({handleShowRegion}) {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [isFixed, setIsFixed] = useState(false);
    const [fixedRegion, setFixedRegion] = useState(null);

    // gpt사용
    const handleClick = (regionId) => {
        if (isFixed && selectedRegion === regionId) {
            setIsFixed(false);
            setSelectedRegion(null);
            setFixedRegion(null);
            handleShowRegion(null);
        } else {
            setIsFixed(true);
            setSelectedRegion(regionId);
            const region = Object.values(busanMapData).find(region => region.id === regionId);
            if (region) {
                setFixedRegion(region.alert);
                handleShowRegion(region.alert);
            }
        }
    };

    const handleHover = (regionId) => {
        if (!isFixed) {
            const region = Object.values(busanMapData).find(region => region.id === regionId);
            if (region) {
                handleShowRegion(region.alert);
            }
        }
    };

    return (
        <div>
            <svg
                viewBox="0 0 3000 4000"  //좌우 상하
                fill='white'
                xmlns="http://www.w3.org/2000/svg"
                className="busan-map"
                stroke="blue"  // 줄 색상
                strokeWidth='2'  // path에 긋는 줄 굵기
            >
                {Object.values(busanMapData).map(region => (
                    <path
                        key={region.id}
                        id={region.id}
                        className={`district-path ${selectedRegion === region.id ? 'selected' : ''}`}
                        d={region.d}
                        onClick={() => handleClick(region.id)}
                        onMouseEnter={() => handleHover(region.id)}
                    />
                ))}
            </svg>
        </div>
    );
}

export default BusanMap;