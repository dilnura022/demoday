import React, { useState } from 'react'
import collection0 from "../assets/collection0.png"
import collection2 from "../assets/collection2.png"
import collection3 from "../assets/collection3.png"
import collection4 from "../assets/collection4.png"
import collection5 from "../assets/collection5.png"
import collection6 from "../assets/collection6.png"
import collection7 from "../assets/collection7.png"
import collection8 from "../assets/collection8.png"
import collection9 from "../assets/collection9.png"
import { VscHeart } from 'react-icons/vsc'
import { useCart } from "react-use-cart";



const dress = [
    {
        id: 1,
        img: collection0,
        secret: 'FA#0051',
        price: '999$'
    },
    {
        id: 2,
        img: collection2,
        secret: 'FK#9921',
        price: '899$'
    },
    {
        id: 3,
        img: collection3,
        secret: 'FA#2092',
        price: '543$'
    },
    {
        id: 4,
        img: collection4,
        secret: 'FA#0051',
        price: '345$'
    },
    {
        id: 5,
        img: collection5,
        secret: 'FA#9921',
        price: '100$'
    },
    {
        id: 6,
        img: collection6,
        secret: 'FA#2092',
        price: '800$'
    },
    {
        id: 7,
        img: collection7,
        secret: 'FA#0051',
        price: '778$'
    },
    {
        id: 8,
        img: collection8,
        secret: 'FK#9921',
        price: '299$'
    },
    {
        id: 9,
        img: collection9,
        secret: 'FA#2092',
        price: '800$'
    }
]

function Drops() {

    const { addItem } = useCart();

    const [change, setChange] = useState(false)

    return (
        <div className='container '>
            <p className='p'>23,344,420 items</p>
            <div className='boxes'>

                {dress.map((item, index) => (

                    <div className="dress" key={index}>

                        <div className="box">
                            <img src={item.img} alt="" />
                        </div>

                        <p className="secret">Secret Rare <span>{item.secret}</span></p>

                        <b className="lorem">Lorem ipsum. <b>0.005 ETH</b></b>
                        <b className="lorem">Lorem ipsum. <b>{item.price}</b></b>
                       
                        <div className='buttons'>

                            <VscHeart className='heart'  />

                            <div key={item.id} >
                                <button className='btn' onClick={() => addItem(item)}>buy now</button>
                            </div>


                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Drops