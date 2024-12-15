import React from 'react';

import BukCard from "./BukCard";
import BusanjinCard from "./BusanjinCard";
import DongCard from './DongCard';
import DongnaeCard from './DongnaeCard';
import GangseoCard from './GangseoCard';
import GeumjeongCard from './GeumjeongCard';
import GijangCard from './GijangCard';
import HaeundaeCard from './HaeundaeCard';
import JungCard from './JungCard';
import NamCard from './NamCard';
import SahaCard from './SahaCard';
import SasangCard from './SasangCard';
import SeoCard from './SeoCard';
import SuyeongCard from './SuyeongCard';
import YeongdoCard from './YeongdoCard';
import YeonjeCard from './YeonjeCard';

function MainCard({region}) {

    function renderCard() {
        switch (region) {
            case '북구': return <BukCard/>
            case '부산진구': return <BusanjinCard/>
            case '동구': return <DongCard/>
            case '동래구': return <DongnaeCard/>
            case '강서구': return <GangseoCard/>
            case '기장군': return <GijangCard/>
            case '금정구': return <GeumjeongCard/>
            case '해운대구': return <HaeundaeCard/>
            case '중구': return <JungCard/>
            case '남구': return <NamCard/>
            case '사하구': return <SahaCard/>
            case '사상구': return <SasangCard/>
            case '서구': return <SeoCard/>
            case '수영구': return <SuyeongCard/>
            case '영도구': return <YeongdoCard/>
            case '연제구': return <YeonjeCard/>
            default:
        }
    }

    return (
        <>
            {renderCard()}
        </>
    );
}

export default MainCard;