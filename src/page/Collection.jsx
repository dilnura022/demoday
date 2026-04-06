import React from "react";
import rasm from "../assets/colec.png"
import rasm2 from "../assets/colecton.png"
import rasm3 from "../assets/coolec.png"
import rasm4 from "../assets/cool.png"
import model1 from "../assets/model1.png"
import model2 from "../assets/model2.png"
import model3 from "../assets/model3.png"
import model4 from "../assets/model4.png"
import pro1 from "../assets//pro1.png"
import pro2 from "../assets//pro2.png"
import pro3 from "../assets//pro3.png"
import pro4 from "../assets//pro4.png"

const data = [
    {
        img: rasm,
        time: "Since 8:24 am",
        viewers: 55,
    },
    {
        img: rasm2,
        time: "Since 9:24 am",
        viewers: 45,
    },
    {
        img: rasm3,
        time: "Since 10:24 am",
        viewers: 35,
    },
    {
        img: rasm4,
        time: "Since 12:24 am",
        viewers: 25,
    },
];

const url = [
    {
        img: model1,
        time: "Today 8 PM",
    },
    {
        img: model2,
        time: "Today 8 PM",
    },
    {
        img: model3,
        time: "Today 8 PM",
    },
    {
        img: model4,
        time: "Today 8 PM",
    }
];

const show = [
    {
        img: pro1,
        time: '18 Mins Ago'
    },
    {
        img: pro2,
        time: '1 Hour Ago'
    },
    {
        img: pro3,
        time: '2 Days Ago'
    },
    {
        img: pro4,
        time: '3 Days Ago'
    }
]

function Collection() {
    return (
        <div className="container">
            <h2 className="title">Live Now</h2>

            <div className="posts">
                {data.map((item, index) => (
                    <div className="post" key={index}>

                        <p className="time">{item.time}</p>

                        <div className="imgBox">
                            <img src={item.img} alt="" />

                            <span className="live">Live 🔴</span>
                            <span className="viewers">👤 {item.viewers}</span>
                        </div>

                        <p className="brand">
                            Showing : <span>Zalando ✔</span>
                        </p>

                    </div>
                ))}
            </div>
            <h2 className="title2">Upcoming Shows</h2>
            <div className="shows">
                {url.map((item, index) => (
                    <div className="model" key={index}>

                        <p className="time">{item.time}</p>

                        <div className="imgBox">
                            <img src={item.img} alt="" />
                        </div>

                        <p className="brand">
                            Showing : <span>Zalando ✔</span>
                        </p>
                    </div>
                ))}
            </div>


            <h2 className="title3">Previous Shows</h2>
            <div className="pro">
                {show.map((item, index) => (
                    <div className="model" key={index}>

                        <p className="time">{item.time}</p>

                        <div className="imgBox">
                            <img src={item.img} alt="" />
                        </div>

                        <p className="brand">
                            Showing : <span>Zalando ✔</span>
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collection;