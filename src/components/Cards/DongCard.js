import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "dong": {
        'jeongwoo': {
            src: "/img/dong/dong-jeongwoo.jpg",
            alert: "정우",
            job: '배우',
            home: '부산광역시 동구 범일동'
        },
        'kimhaesook': {
            src: "/img/dong/dong-kimhaesook.jpg",
            alert: "김해숙",
            job: "배우",
            home: '부산광역시 동구 초량동'
        },
        'nahoona': {
            src: "/img/dong/dong-nahoona.jpg",
            alert: '나훈아',
            job: "트로트 가수-가왕",
            home: '부산광역시 동구 초량동'
        },
        'namjoohyuk': {
            src: "/img/dong/dong-namjoohyuk.jpg",
            alert: '남주혁',
            job: '배우',
            home: '부산광역시 동구 좌천동'
        }
    }
}]

function DongCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Jeongwoo />
                <Namjoohyuk />
                <Nahoona />
                <Kimhaesook />
            </Carousel>
        </div>
    );
}

export default DongCard;

const Jeongwoo = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].dong.jeongwoo.src}
                        alt={images[0].dong.jeongwoo.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].dong.jeongwoo.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].dong.jeongwoo.home}<br/>
                            직업 : {images[0].dong.jeongwoo.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Kimhaesook = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].dong.kimhaesook.src}
                        alt={images[0].dong.kimhaesook.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].dong.kimhaesook.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].dong.kimhaesook.home}<br/>
                            직업 : {images[0].dong.kimhaesook.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Nahoona = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].dong.nahoona.src}
                        alt={images[0].dong.nahoona.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].dong.nahoona.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].dong.nahoona.home}<br/>
                            직업 : {images[0].dong.nahoona.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Namjoohyuk = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].dong.namjoohyuk.src}
                        alt={images[0].dong.namjoohyuk.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].dong.namjoohyuk.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].dong.namjoohyuk.home}<br/>
                            직업 : {images[0].dong.namjoohyuk.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}