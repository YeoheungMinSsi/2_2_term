import React from 'react';
import {Carousel} from "flowbite-react";
import {Link} from "react-router-dom";

const images = [{
    "busanjin": {
        'sandarabak': {
            src: "/img/busanjin/busanjin-sandarabak.jpg",
            alert: '산다라박',
            job: '여자 아이돌-2EN1',
            home: '부산광역시 부산진구'
        },
        'kimwonhae': {
            src: "/img/busanjin/busanjin-kimwonhae.jpg",
            alert: "김원해",
            job: "배우",
            home: '부산광역시 부산진구'
        },
        'leechangmin': {
            src: "/img/busanjin/busanjin-leechangmin.jpg",
            alert: '이창민',
            job: "남자 아이돌-2AM,HOMME",
            home: '부산광역시 부산진구 개금동'
        }
    }
}]

function BusanjinCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Sandarabak />
                <Kimwonhae />
                <Leechangmin />
            </Carousel>
        </div>
    );
}

export default BusanjinCard;


const Sandarabak = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].busanjin.sandarabak.src}
                        alt={images[0].busanjin.sandarabak.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].busanjin.sandarabak.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].busanjin.sandarabak.home}<br/>
                            직업 : {images[0].busanjin.sandarabak.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Kimwonhae = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].busanjin.kimwonhae.src}
                        alt={images[0].busanjin.kimwonhae.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].busanjin.kimwonhae.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].busanjin.kimwonhae.home}<br/>
                            직업 : {images[0].busanjin.kimwonhae.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Leechangmin = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].busanjin.leechangmin.src}
                        alt={images[0].busanjin.leechangmin.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].busanjin.leechangmin.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].busanjin.leechangmin.home}<br/>
                            직업 : {images[0].busanjin.leechangmin.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
