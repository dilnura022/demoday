import React from 'react'
import rasm from "../assets/first.png"
import rasm2 from "../assets/second.png"
import rasm3 from "../assets/fourth.png"
import rasm4 from "../assets/fivth.png"
import rasm5 from "../assets/seven.png"
import rasm6 from "../assets/third.png"
// import svg from "../assets/photo1.svg"
import toqqz from "../assets/toqqz.png"
import ten from "../assets/ten.png"
import nine from "../assets/nine.png"

function Explore() {
    return (
        <div className='container'>
            <div className=''>
                <h1 className='explore'>Explore Collections</h1>
            </div>

            <div className='cards'>

                <div className='card'>
                    <img className='' src={rasm} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>

                <div className='card'>
                    <img src={rasm2} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>

                <div className='card'>
                    <img src={rasm3} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>
            </div>

            <div className='cardss'>

                <div className='card'>
                    <img src={rasm4} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>

                <div className='card'>
                    <img src={rasm5} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>

                <div className='card'>
                    <img src={rasm6} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>
            </div>


            <div className='cardss'>

                <div className='card'>
                    <img src={toqqz} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>

                <div className='card'>
                    <img src={ten} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>

                <div className='card'>
                    <img src={nine} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tempus nisi, mollis diam vulputate nec. Donec fringilla nunc cursus nulla id leo felis fringilla est.</p>
                </div>
            </div>








        </div>
    )
}

export default Explore