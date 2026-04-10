import React from 'react'
import { useCart } from 'react-use-cart'
import collection0 from "../assets/collection0.png"
import collection2 from "../assets/collection2.png"
import collection3 from "../assets/collection3.png"
import collection4 from "../assets/collection4.png"
import collection5 from "../assets/collection5.png"
import collection6 from "../assets/collection6.png"
import collection7 from "../assets/collection7.png"
import collection8 from "../assets/collection8.png"
import collection9 from "../assets/collection9.png"

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

function Basket() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


  if (isEmpty) return <p className='p'>Your cart is empty</p>;

  return (
    <div className='container'>


      <div className='total'>
        <h1>total number:{totalUniqueItems}</h1>
      </div>

      <div className='key'>

        {items.map((p) => (
          <div key={p.id}>
            <div className="box">
              <img src={p.img} alt="" />
            </div>

            <p className="secret">Secret Rare <span>{p.secret}</span></p>

            <b className="lorem">Lorem ipsum. <b>0.005 ETH</b></b>
            <b className="lorem">Lorem ipsum. <b>{p.price}</b></b>
            <button className='delete' onClick={() => removeItem(p.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Basket