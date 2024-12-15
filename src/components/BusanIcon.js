import * as Icons from './Icons';
import { Carousel } from "flowbite-react";
import { useMemo } from "react";
import { busanRegion } from './busanRegion';

function BusanIcon() {
    const handleIconClick = (regionId) => {
        const region = busanRegion[regionId];
        if (region && region.link) {
            window.open(region.link, '_blank');
        }
    };

    const firstPage = useMemo(() => {
        return (
            <div className="busan-icon-page">
                <Icons.GangseoIcon handleClick={() => handleIconClick('gangseo-gu')} />
                <Icons.GeumjeongIcon handleClick={() => handleIconClick('geumjeong-gu')} />
                <Icons.GijangIcon handleClick={() => handleIconClick('gijang-gun')} />
                <Icons.NamIcon handleClick={() => handleIconClick('nam-gu')} />
                <Icons.DongIcon handleClick={() => handleIconClick('dong-gu')} />
                <Icons.DongnaeIcon handleClick={() => handleIconClick('dongnae-gu')} />
                <Icons.BusanjinIcon handleClick={() => handleIconClick('busanjin-gu')} />
                <Icons.BukIcon handleClick={() => handleIconClick('buk-gu')} />
            </div>
        );
    }, []);

    const secondPage = useMemo(() => {
        return (
            <div className="busan-icon-page">
                <Icons.SasangIcon handleClick={() => handleIconClick('sasang-gu')} />
                <Icons.SahaIcon handleClick={() => handleIconClick('saha-gu')} />
                <Icons.SeoIcon handleClick={() => handleIconClick('seo-gu')} />
                <Icons.SuyeongIcon handleClick={() => handleIconClick('suyeong-gu')} />
                <Icons.YeonjeIcon handleClick={() => handleIconClick('yeonje-gu')} />
                <Icons.YeongdoIcon handleClick={() => handleIconClick('yeongdo-gu')} />
                <Icons.JungIcon handleClick={() => handleIconClick('jung-gu')} />
                <Icons.HaeundaeIcon handleClick={() => handleIconClick('haeundae-gu')} />
            </div>
        );
    }, []);

    return (
        <div className="busan-icon h-56 sm:h-64 xl:h-80 2xl:h-96">
            <h1 className='busan-icon-text'>부산 각 구의 아이콘</h1>
            <h1 className='busan-icon-text2'>아이콘을 클릭하면 홈페이지로 이동합니다</h1>
            <Carousel slideInterval={5000} pauseOnHover>
                {firstPage}
                {secondPage}
            </Carousel>
        </div>
    );
}

export default BusanIcon;
