import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "saha": {
        'bae': {
            src: "/img/saha/saha-bae.jpg",
            alert: "배진솔(배이)",
            job: "배우/여자 아이돌-오마이걸(OH MY GIRL)",
            home: '부산광역시 사하구 장림동'
        },
        'jeongeunji': {
            src: "/img/saha/saha-jeongeunji.jpg",
            alert: "정은지",
            job: "배우/가수/前 여자 아이돌-에이핑크(Apink)",
            home: '부산광역시 사하구'
        },
        'kangdongwon': {
            src: "/img/saha/saha-kangdongwon.jpg",
            alert: '강동원',
            job: "배우",
            home: '부산광역시 사하구 하단동'
        },
        'sungjin': {
            src: "/img/saha/saha-sungjin.jpg",
            alert: '박성진(성진)',
            job: '밴드(기타,메인보컬)-데이식스(DAY6)',
            home: '부산광역시 사하구 하단동'
        }
    }
}]

function SahaCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Kangdongwon />
                <Bae />
                <Sungjin />
                <Jeongeunji />
            </Carousel>
        </div>
    );
}

export default SahaCard;


const Kangdongwon = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].saha.kangdongwon.src}
                        alt={images[0].saha.kangdongwon.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].saha.kangdongwon.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].saha.kangdongwon.home}<br/>
                            직업 : {images[0].saha.kangdongwon.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}


const Jeongeunji = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].saha.jeongeunji.src}
                        alt={images[0].saha.jeongeunji.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].saha.jeongeunji.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].saha.jeongeunji.home}<br/>
                            직업 : {images[0].saha.jeongeunji.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Bae = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].saha.bae.src}
                        alt={images[0].saha.bae.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].saha.bae.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].saha.bae.home}<br/>
                            직업 : {images[0].saha.bae.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Sungjin = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].saha.sungjin.src}
                        alt={images[0].saha.sungjin.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].saha.sungjin.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].saha.sungjin.home}<br/>
                            직업 : {images[0].saha.sungjin.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

