import React from 'react';
import { useParams } from 'react-router-dom';
import { busanRegion } from './components/busanRegion';

function RegionList() {
    const { id } = useParams();
    const region = busanRegion[id];

    if (!region) {
        return <div>지역을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <h1>{region.alert} 상세 정보</h1>
            {/* 여기에 지역별 컴포넌트를 조건부로 렌더링할 수 있습니다 */}
        </div>
    );
}

export default RegionList;