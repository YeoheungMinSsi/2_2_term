import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "suyeong": {
        'heopop': {
            src: "/img/suyeong/suyeong-heopop.jpg",
            alert: "허재원(허팝)",
            job: "크리에이터",
            home: '부산광역시 수영구 망미동'
        },
        'isa': {
            src: "/img/suyeong/suyeong-isa.jpg",
            alert: "이채영(아이사)",
            job: "여자 아이돌-스테이씨(STAYC)",
            home: '부산광역시 수영구 민락동'
        },
        'leedeaho': {
            src: "/img/suyeong/suyeong-leedeaho.jpg",
            alert: '이대호',
            job: "前 운동선수-야구선수",
            home: '부산광역시 수영구/현재 해운대구 우동 아타트리움 거주중'
        }
    }
}]

function SuyeongCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Leedaeho />
                <Isa />
                <Heopop />
            </Carousel>
        </div>
    );
}

export default SuyeongCard;


const Leedaeho = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].suyeong.leedeaho.src}
                        alt={images[0].suyeong.leedeaho.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].suyeong.leedeaho.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].suyeong.leedeaho.home}<br/>
                            직업 : {images[0].suyeong.leedeaho.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Isa = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].suyeong.isa.src}
                        alt={images[0].suyeong.isa.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].suyeong.isa.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].suyeong.isa.home}<br/>
                            직업 : {images[0].suyeong.isa.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Heopop = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].suyeong.heopop.src}
                        alt={images[0].suyeong.heopop.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].suyeong.heopop.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].suyeong.heopop.home}<br/>
                            직업 : {images[0].suyeong.heopop.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

