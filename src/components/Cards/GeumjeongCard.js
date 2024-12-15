import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "geumjeong": {
        'jimin': {
            src: "/img/geumjeong/geumjeong-jimin.jpg",
            alert: "박지민(지민)",
            job: "남자 아이돌-방탄소년단(BTS)",
            home: '부산광역시 금정구 회동동'
        },
        'ssamdi': {
            src: "/img/geumjeong/geumjeong-ssamdi.jpg",
            alert: '정기석(사이먼 도미닉)',
            job: '래퍼',
            home: '부산광역시 금정구 구서동'
        }
    }
}]

function GeumjeongCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Jimin />
                <Ssamdi />
            </Carousel>
        </div>
    );
}

export default GeumjeongCard;


const Jimin = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].geumjeong.jimin.src}
                        alt={images[0].geumjeong.jimin.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].geumjeong.jimin.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].geumjeong.jimin.home}<br/>
                            직업 : {images[0].geumjeong.jimin.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Ssamdi = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].geumjeong.ssamdi.src}
                        alt={images[0].geumjeong.ssamdi.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].geumjeong.ssamdi.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].geumjeong.ssamdi.home}<br/>
                            직업 : {images[0].geumjeong.ssamdi.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
