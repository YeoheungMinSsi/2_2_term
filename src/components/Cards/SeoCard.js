import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "seo": {
        'leekyeonggyu': {
            src: "/img/seo/seo-leekyeonggyu.jpg",
            alert: "이경규",
            job: "코미디언/예능인",
            home: '부산광역시 서구 동대신동'
        },
        'sinbongsun': {
            src: "/img/seo/seo-sinbongsun.jpg",
            alert: "신봉선",
            job: "코미디언/예능인",
            home: '부산광역시 서구 아미동'
        },
        'kimkwangkyu': {
            src: "/img/seo/seo-kimkwangkyu.jpg",
            alert: "김광규",
            job: "배우",
            home: '부산광역시 서구 암남동'
        }
    }
}]

function SeoCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Leekyeonggyu />
                <Sinbongsun />
                <Kimkwangkyu />
            </Carousel>
        </div>
    );
}

export default SeoCard;


const Leekyeonggyu = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].seo.leekyeonggyu.src}
                        alt={images[0].seo.leekyeonggyu.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].seo.leekyeonggyu.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].seo.leekyeonggyu.home}<br/>
                            직업 : {images[0].seo.leekyeonggyu.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Sinbongsun = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].seo.sinbongsun.src}
                        alt={images[0].seo.sinbongsun.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].seo.leekyeonggyusinbongsunalert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].seo.sinbongsun.home}<br/>
                            직업 : {images[0].seo.sinbongsun.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Kimkwangkyu = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].seo.kimkwangkyu.src}
                        alt={images[0].seo.kimkwangkyu.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].seo.kimkwangkyu.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].seo.kimkwangkyu.home}<br/>
                            직업 : {images[0].seo.kimkwangkyu.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
