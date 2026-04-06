import React, { useState } from 'react'
import heroimage from "../assets/heroimage.png"
import puma from "../assets/puma.png"
import black from "../assets/qora.png"

import collection0 from "../assets/collection0.png"
import collection2 from "../assets/collection2.png"
import collection3 from "../assets/collection3.png"
import collection4 from "../assets/collection4.png"
import collection5 from "../assets/collection5.png"
import collection6 from "../assets/collection6.png"
import collection7 from "../assets/collection7.png"
import collection8 from "../assets/collection8.png"
import collection9 from "../assets/collection9.png"

import rasm2 from "../assets/second.png"
import rasm3 from "../assets/fourth.png"
import rasm4 from "../assets/fivth.png"


const productsData = [
    { id: 1, name: "Futuristic Suit", category: "Verified Artists", price: "0.005 ETH", img: collection0 },
    { id: 2, name: "Traditional Cyber", category: "Verified Artists", price: "0.005 ETH", img: collection2 },
    { id: 3, name: "Mirror Dress", category: "Verified Brands", price: "0.005 ETH", img: collection3 },
    { id: 4, name: "Purple Cyber Jacket", category: "New Drops", price: "0.005 ETH", img: collection4 },
    { id: 5, name: "Red Mecha Jacket", category: "New Drops", price: "0.005 ETH", img: collection5 },
    { id: 6, name: "Yellow Techwear", category: "New Drops", price: "0.005 ETH", img: collection6 },
    { id: 7, name: "Red Dragon Sneaker", category: "Verified Brands", price: "0.005 ETH", img: collection7 },
    { id: 8, name: "Blue Pulse Sneaker", category: "Verified Brands", price: "0.005 ETH", img: collection8 },
    { id: 9, name: "Golden Wing Sneaker", category: "Verified Brands", price: "0.005 ETH", img: collection9 }
];

const categories = [
    "All Collections",
    "Verified Brands",
    "Verified Artists",
    "New Drops",
    "Live Shows"
];

function Home() {
    const [activeTab, setActiveTab] = useState("All Collections");

    const [followedIds, setFollowedIds] = useState([]);


    const filteredItems = activeTab === "All Collections"
        ? productsData
        : productsData.filter(item => item.category === activeTab);


    const handleFollow = (id) => {
        setFollowedIds((prev) =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className='container'>
            <div className="hero">
                <div className="hero-text">
                    <h2 className="hero-title">Clothes are the Spirit of Fashion</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
                    <div className="hero-btns">
                        <button className="btnses">Explore</button>
                        <button className="btner">Create</button>
                    </div>
                </div>

                <div className="hero-grid">
                    <img src={heroimage} className="hero-img" />
                </div>
            </div>

            <div className="foto">
                <img className="logotip" src={puma} alt="" />
            </div>


            <div className='aboutUs'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='fashion'>
                <div className='rasm'>

                    <img src={black} alt="" />

                </div>

                <div className='speak'>

                    <h2>Fashion That Speaks</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                    <button>Show more</button>

                </div>
            </div>


            <div className="header">
                <h1>All Collection</h1>
                <p>Worlds First Layer 2 Fashion Marketplace</p>
            </div>

            <div className="features">
                <div className="feature-item">🏷️ No Gas Fees</div>
                <div className="feature-item">🌱 Carbon Neutral NFTs</div>
                <div className="feature-item">⚡ Fast And Easy</div>
            </div>

            <div className="tabs">
                {categories.map(tab => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="nft-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="mmm">
                        <img src={item.img} alt="nft" />
                        <div className="card-info">
                            <span className="author">@Johny</span>
                            <div className="title-price">
                                <h4>{item.name}</h4>
                                <div className="price">
                                    <span style={{ color: '#888', fontWeight: 'normal' }}>Current Bid</span><br />
                                    {item.price}
                                </div>
                            </div>
                            <button className="buy-now">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>


            <div className="section-header">
                <h2>Upcoming Creators</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='cardss'>

                <div className='card'>
                    <img src={rasm2} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <button
                        className={`follow-btn ${followedIds.includes(1) ? "followed" : ""}`}
                        onClick={() => handleFollow(1)}
                    >
                        {followedIds.includes(1) ? "+ Followed" : "+ Follow"}
                    </button>
                </div>


                <div className='card'>
                    <img src={rasm3} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <button
                        className={`follow-btn ${followedIds.includes(2) ? "followed" : ""}`}
                        onClick={() => handleFollow(2)}
                    >
                        {followedIds.includes(2) ? "+ Followed" : "+ Follow"}
                    </button>
                </div>


                <div className='card'>
                    <img src={rasm4} alt="" />
                    <h3>John Wick ✅</h3>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <button
                        className={`follow-btn ${followedIds.includes(3) ? "followed" : ""}`}
                        onClick={() => handleFollow(3)}
                    >
                        {followedIds.includes(3) ? "+ Followed" : "+ Follow"}
                    </button>
                </div>
            </div>

            <div className="section-header">
                <h2>Frequently Asked Question</h2>
                <p>Wanna ask something?</p>
            </div>
            <div className="faq-container">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="faq-item">
                        <span>Lorem Ipsum Ipsum?</span>
                        <span className="plus">+</span>
                    </div>
                ))}
            </div>

            <div className="cta-purple-banner">
                <h1>Highest Quality Collection</h1>
                <button className="get-started-btn">Get Started</button>
            </div>



        </div>
    )
}

export default Home