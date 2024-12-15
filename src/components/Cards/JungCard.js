import React from 'react';
import {Carousel} from "flowbite-react";

const images = [{
    "jung": {
        'winter': {
            src: "/img/jung/jung-winter.png",
            alert: "김민정(윈터)",
            job: "여자 아이돌-에스파(aespa)",
            home: '부산광역시 중구 남포동'
        }
    }
}]

function JungCard(props) {

    return (
        <div className="buk-card">
            <Carousel>
                <Winter />
            </Carousel>
        </div>
    );
}

export default JungCard;


const Winter = () => {
    return (
        <>
            <div className="card bg-base-100 w-96">
                <figure className="card-img">
                    <img
                        src={images[0].jung.winter.src}
                        alt={images[0].jung.winter.alert}
                        className="human-card h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{images[0].jung.winter.alert}</h2>
                    <div className="card-content">
                        <p>출신 : {images[0].jung.winter.home}<br/>
                            직업 : {images[0].jung.winter.job}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
