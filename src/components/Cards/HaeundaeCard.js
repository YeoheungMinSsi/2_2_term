import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "haeundae": {
        'anjaehong': {
            src: "/img/haeundae/haeundae-anjaehong.jpg",
            alert: "안재홍",
            job: "배우",
            home: '부산광역시 해운대구'
        },
        'kangseungyoon': {
            src: "/img/haeundae/haeundae-kangseungyoon.jpg",
            alert: "강승윤",
            job: "남자 아이돌-위너(WINNER)",
            home: '부산광역시 해운대구'
        },
        'gyeongree': {
            src: "/img/haeundae/haeundae-gyeongree.jpg",
            alert: '박경리(경리)',
            job: "배우/前 여자 아이돌-나인뮤지스",
            home: '부산광역시 해운대구 반송동'
        },
        'parkjiwon': {
            src: "/img/haeundae/haeundae-parkjiwon.gif",
            alert: '박지원',
            job: '여자 아이돌-프로미스나인(fromis 9)',
            home: '부산광역시 해운대구 우동'
        },
        'seolundo': {
            src: "/img/haeundae/haeundae-seolundo.jpg",
            alert: '설운도',
            job: "트로트 가수-가왕",
            home: '부산광역시 해운대구'
        }
    }
}]

function HaeundaeCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Parkjiwon />
                <Anjaehong />
                <Gyeongree />
                <Seolundo />
                <Kangseungyoon />
            </Carousel>
        </div>
    );
}

export default HaeundaeCard;


const Parkjiwon = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].haeundae.parkjiwon.src}
                        alt={images[0].haeundae.parkjiwon.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].haeundae.parkjiwon.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].haeundae.parkjiwon.home}<br/>
                            직업 : {images[0].haeundae.parkjiwon.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Anjaehong = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].haeundae.anjaehong.src}
                        alt={images[0].haeundae.anjaehong.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].haeundae.anjaehong.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].haeundae.anjaehong.home}<br/>
                            직업 : {images[0].haeundae.anjaehong.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Gyeongree = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].haeundae.gyeongree.src}
                        alt={images[0].haeundae.gyeongree.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].haeundae.gyeongree.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].haeundae.gyeongree.home}<br/>
                            직업 : {images[0].haeundae.gyeongree.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Seolundo = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].haeundae.seolundo.src}
                        alt={images[0].haeundae.seolundo.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].haeundae.seolundo.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].haeundae.seolundo.home}<br/>
                            직업 : {images[0].haeundae.seolundo.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Kangseungyoon = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].haeundae.kangseungyoon.src}
                        alt={images[0].haeundae.kangseungyoon.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].haeundae.kangseungyoon.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].haeundae.kangseungyoon.home}<br/>
                            직업 : {images[0].haeundae.kangseungyoon.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
