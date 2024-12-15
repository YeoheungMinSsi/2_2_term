import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "yeonje": {
        'kimsangjoong': {
            src: "/img/yeonje/yeonje-kimsangjoong.jpg",
            alert: "김상중",
            job: "배우",
            home: '부산광역시 연제구 연산동'
        },
        'kimtaehee': {
            src: "/img/yeonje/yeonje-kimtaehee.jpg",
            alert: "김태희",
            job: "배우",
            home: '부산광역시 연제구 연산동'
        }
    }
}]

function YeonjeCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Kimsangjoong />
                <Kimtaehee />
            </Carousel>
        </div>
    );
}

export default YeonjeCard;


const Kimsangjoong = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].yeonje.kimsangjoong.src}
                        alt={images[0].yeonje.kimsangjoong.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].yeonje.kimsangjoong.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].yeonje.kimsangjoong.home}<br/>
                            직업 : {images[0].yeonje.kimsangjoong.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Kimtaehee = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].yeonje.kimtaehee.src}
                        alt={images[0].yeonje.kimtaehee.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].yeonje.kimtaehee.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].yeonje.kimtaehee.home}<br/>
                            직업 : {images[0].yeonje.kimtaehee.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
