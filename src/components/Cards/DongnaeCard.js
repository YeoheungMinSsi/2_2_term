import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "dongnae": {
        'gongyuu': {
            src: "/img/dongnae/dongnae-gongyuu.jpg",
            alert: "공유",
            job: '배우',
            home: '부산광역시 동래구 낙민동'
        },
        'kimdongjoon': {
            src: "/img/dongnae/dongnae-kimdongjoon.jpg",
            alert: "김동준",
            job: "배우 / 아이동-제국의아이돌",
            home: '부산광역시 동래구 사직동'
        },
        'baejungnam': {
            src: "/img/dongnae/dongnae-baejungnam.jpg",
            alert: "배정남",
            job: "배우",
            home: '부산광역시 동래구 서동'
        },
    }
}]

function DongnaeCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Gongyuu />
                <Kimdongjoon />
            </Carousel>
        </div>
    );
}

export default DongnaeCard;


const Gongyuu = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].dongnae.gongyuu.src}
                        alt={images[0].dongnae.gongyuu.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].dongnae.gongyuu.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].dongnae.gongyuu.home}<br/>
                            직업 : {images[0].dongnae.gongyuu.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Kimdongjoon = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].dongnae.kimdongjoon.src}
                        alt={images[0].dongnae.kimdongjoon.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].dongnae.kimdongjoon.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].dongnae.kimdongjoon.home}<br/>
                            직업 : {images[0].dongnae.kimdongjoon.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Baejungnam = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].dongnae.baejungnam.src}
                        alt={images[0].dongnae.baejungnam.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].dongnae.baejungnam.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].dongnae.baejungnam.home}<br/>
                            직업 : {images[0].dongnae.baejungnam.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}