import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "sasang": {
        'leesiun': {
            src: "/img/sasang/sasang-leesiun.jpg",
            alert: "이시언",
            job: "배우",
            home: '부산광역시 사상구 모라동'
        },
        'noel': {
            src: "/img/sasang/sasang-noel.jpg",
            alert: "장용준(노엘)",
            job: "래퍼",
            home: '부산광역시 사상구 주례동'
        },
        'sandle': {
            src: "/img/sasang/sasang-sandle.jpg",
            alert: '이정환(산들)',
            job: "가수/뮤지컬 배우/前 남자 아이돌-비원에이포(B1A4)",
            home: '부산광역시 사상구 주례동'
        }
    }
}]

function SasangCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Leesiun/>
                <Noel />
                <Sandle />
            </Carousel>
        </div>
    );
}

export default SasangCard;


const Leesiun = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].sasang.leesiun.src}
                        alt={images[0].sasang.leesiun.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].sasang.leesiun.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].sasang.leesiun.home}<br/>
                            직업 : {images[0].sasang.leesiun.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Noel = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].sasang.noel.src}
                        alt={images[0].sasang.noel.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].sasang.noel.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].sasang.noel.home}<br/>
                            직업 : {images[0].sasang.noel.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Sandle = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].sasang.sandle.src}
                        alt={images[0].sasang.sandle.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].sasang.sandle.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].sasang.sandle.home}<br/>
                            직업 : {images[0].sasang.sandle.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
