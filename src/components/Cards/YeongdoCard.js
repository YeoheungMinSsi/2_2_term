import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "yeongdo": {
        'jungkyoungmi': {
            src: "/img/yeongdo/yeongdo-jungkyoungmi.jpg",
            alert: "정경미",
            job: "코미디언",
            home: '부산광역시 영도구 신선동'
        },
        'kangdaniel': {
            src: "/img/yeongdo/yeongdo-kangdaniel.jpg",
            alert: '강의건(강다니엘)',
            job: "가수/前아이돌-워너원(Wanna One)",
            home: '부산광역시 영도구 청학동(강원도 원주)'
        }
    }
}]

function YeongdoCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Jungkyoungmi />
                <Kangdaniel />
            </Carousel>
        </div>
    );
}

export default YeongdoCard;


const Jungkyoungmi = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].yeongdo.jungkyoungmi.src}
                        alt={images[0].yeongdo.jungkyoungmi.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].yeongdo.jungkyoungmi.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].yeongdo.jungkyoungmi.home}<br/>
                            직업 : {images[0].yeongdo.jungkyoungmi.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Kangdaniel = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].yeongdo.kangdaniel.src}
                        alt={images[0].yeongdo.kangdaniel.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].yeongdo.kangdaniel.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].yeongdo.kangdaniel.home}<br/>
                            직업 : {images[0].yeongdo.kangdaniel.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
