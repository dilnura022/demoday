import React, { useState } from 'react'
import collection0 from "../assets/collection0.png"
import collection2 from "../assets/collection2.png"
import collection3 from "../assets/collection3.png"
import zara from "../assets/zara.png"
import zalando from "../assets/zalando.png"
import cartier from "../assets/cartier.png"
import { VscHeart } from 'react-icons/vsc'
import body from "../assets/body.png"
import gr from "../assets/gr.svg"

const dress = [
    {
        img: collection0,
        secret: 'FA#0051',
    },
    {
        img: collection2,
        secret: 'FK#9921',
    },
    {
        img: collection3,
        secret: 'FA#2092',
    }
]

function More() {

    const [active, setActive] = useState(false);
    const [flw, setFlw] = useState(false)
    const [flew, setFlew] = useState(false)

    const [plus, setPlus] = useState(false)
    const [add, setAdd] = useState(false)
    const [up, setUp] = useState(false)


    const [zoom, setZoom] = useState(1)

    const zoomIn = () => {
        setZoom(zoom + 0.1)
    }

    const zoomOut = () => {
        if (zoom > 0.5) {
            setZoom(zoom - 0.1)
        }
    }

    return (
        <div className='container '>
            <div className='df'>

                <div >

                    <h2>Your Meta Look</h2>


                    <div className='scleton'>
                        <img className='bnn' src={body} alt="" style={{ transform: `scale(${zoom})`, transition: "0.3s" }} />

                        <div className='zoomBtns'>
                            <button onClick={zoomOut} >-</button>
                            <button onClick={zoomIn}>+</button>
                        </div>
                    </div>

                </div>


                <div className='chat'>

                    {dress.map((item, index) => (

                        <div className="dre" key={index}>

                            <div className="box">
                                <img src={item.img} alt="" />
                            </div>

                            <p className="secret">
                                Secret Rare <span>{item.secret}</span>
                            </p>

                            <b className="lorem">
                                Lorem ipsum. <b>0.005 ETH</b>
                            </b>

                            <div className='buttons'>
                                <VscHeart className='heart' />
                                <button className='btn'>Buy Now</button>
                            </div>

                        </div>

                    ))}
                </div>

            </div>

            <section className='story'>
                <h2>Stores</h2>

                <div className='zalandos'>

                    <div className='zalando'>
                        <img className='zal' src={zalando} alt="" />
                        <h3>Zalando</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button
                            className={`join-button ${plus ? "active-btn" : ""}`}
                            onClick={() => setPlus(!plus)}>
                            {plus ? "+ Followed" : "+ Follow "}</button>

                    </div>

                    <div className='zara'>
                        <img className='zar' src={zara} alt="" />
                        <h3>Zara</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button
                            className={`join-button ${add ? "active-btn" : ""}`}
                            onClick={() => setAdd(!add)}>
                            {add ? "+ Followed" : "+ Follow "}</button>
                    </div>

                    <div className='cartier'>
                        <img className='car' src={cartier} alt="" />
                        <h3>Cartier</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button
                            className={`join-button ${up ? "active-btn" : ""}`}
                            onClick={() => setUp(!up)}>
                            {up ? "+ Followed" : "+ Follow "}</button>
                    </div>

                </div>
            </section>

            <section className='group'>
                <h2>Groups</h2>

                <div className='zalandos'>

                    <div className='zalando'>
                        <img className='zal' src={zalando} alt="Zalando" />
                        <h3>Zalando</h3>
                        <p>Created by Farhan Khan</p>

                        <div className='flex'>
                            <img src={gr} alt="group icon" />
                            <p>24k Members</p>
                        </div>

                        <button
                            onClick={() => setActive(!active)}
                            className={`join-button ${active ? "active-btn" : ""}`}
                        >
                            {active ? "+ Joined" : "+ Join Group"}
                        </button>
                    </div>

                    <div className='zara'>
                        <img className='zar' src={zara} alt="" />
                        <h3>Zara</h3>
                        <p>Created by Farhan Khan</p>
                        <div className='flex'>
                            <img src={gr} alt="" />
                            <p>24k Members</p>
                        </div>
                        <button
                            onClick={() => setFlew(!flew)}
                            className={`join-button ${flew ? "active-btn" : ""}`}
                        >
                            {flew ? "+ Joined" : "+ Join Group"}
                        </button>
                    </div>

                    <div className='cartier'>
                        <img className='car' src={cartier} alt="" />
                        <h3>Cartier</h3>
                        <p>Created by Farhan Khan</p>
                        <div className='flex'>
                            <img src={gr} alt="" />
                            <p>24k Members</p>
                        </div>
                        <button
                            onClick={() => setFlw(!flw)}
                            className={`join-button ${flw ? "active-btn" : ""}`}
                        >
                            {flw ? "+ Joined" : "+ Join Group"}
                        </button>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default More