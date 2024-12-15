import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "buk": {
        'janghyuek': {
            src: "/img/buk/buk-janghyuek.jpg",
            alert: "장혁",
            job: '배우',
            home: '부산광역시 북구 만덕동'
        },
        'hanseonhwa': {
            src: "/img/buk/buk-hanseonhwa.png",
            alert: "한선화",
            job: '배우/前 여자 아이돌-시크릿(SECLET)',
            home: '부산광역시 북구 금곡동'
        },
        'jeongguk': {
            src: "/img/buk/buk-jeongguk.jpg",
            alert: '정국',
            job: '남자 아이돌-방탄소년단(BTS)',
            home: '출신 : 부산광역시 북구 만덕동'
        }
    }
}]

function BukCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Hanseonhwa/>
                <Janghyuek/>
                <Jeongguk/>
            </Carousel>
        </div>
    );
}

export default BukCard;


const Hanseonhwa = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].buk.hanseonhwa.src}
                        alt={images[0].buk.hanseonhwa.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].buk.hanseonhwa.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].buk.hanseonhwa.home}<br/>
                            직업 : {images[0].buk.hanseonhwa.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Janghyuek = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].buk.janghyuek.src}
                        alt={images[0].buk.janghyuek.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].buk.janghyuek.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].buk.janghyuek.home}<br/>
                            직업 : {images[0].buk.janghyuek.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Jeongguk = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].buk.jeongguk.src}
                        alt={images[0].buk.jeongguk.alert}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].buk.jeongguk.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].buk.jeongguk.home}<br/>
                            직업 : {images[0].buk.jeongguk.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}