import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "nam": {
        'arin': {
            src: "/img/nam/nam-arin.jpg",
            alert: "최예원(아린)",
            job: "배우/여자 아이돌-오마이걸(OH MY GIRL)",
            home: '부산광역시 남구 용호동'
        },
        'jeonghyeongdon': {
            src: "/img/nam/nam-jeonghyeongdon.jpg",
            alert: "정형돈",
            job: "코미디언",
            home: '부산광역시 남구 용호동'
        },
        'jojinwoong': {
            src: "/img/nam/nam-jojinwoong.jpg",
            alert: '조진웅',
            job: "배우",
            home: '부산광역시 남구 문현동'
        },
        'joyuri': {
            src: "/img/nam/nam-joyuri.jpg",
            alert: '조유리',
            job: '배우/가수/前 여자 아이돌-아이즈원(IZ*ONE)',
            home: '부산광역시 남구 문현동'
        }
    }
}]

function NamCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Arin />
                <Jojinwoong />
                <Jeonghyeongdon />
                <Joyuri />
            </Carousel>
        </div>
    );
}

export default NamCard;


const Arin = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].nam.arin.src}
                        alt={images[0].nam.arin.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].nam.arin.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].nam.arin.home}<br/>
                            직업 : {images[0].nam.arin.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Jeonghyeongdon = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].nam.jeonghyeongdon.src}
                        alt={images[0].nam.jeonghyeongdon.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].nam.jeonghyeongdon.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].nam.jeonghyeongdon.home}<br/>
                            직업 : {images[0].nam.jeonghyeongdon.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Jojinwoong = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].nam.jojinwoong.src}
                        alt={images[0].nam.jojinwoong.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].nam.jojinwoong.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].nam.jojinwoong.home}<br/>
                            직업 : {images[0].nam.jojinwoong.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Joyuri = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].nam.joyuri.src}
                        alt={images[0].nam.joyuri.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].nam.joyuri.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].nam.joyuri.home}<br/>
                            직업 : {images[0].nam.joyuri.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
