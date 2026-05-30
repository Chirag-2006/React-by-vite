import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="main">
                <div className="htext">
                    <h1>your feet <br />deserve <br /> the best</h1>
                    <p> your feet deserve the best and we are here to give you the best and nothing but the best that you deserve</p>
                    <div className="buttons">
                        <button>Shop Now</button>
                        <button >Learn More</button>
                    </div>
                    <p> also available on </p>
                    <div className="brand-icons">
                        <img alt="amazon" src='https://img.icons8.com/color/48/000000/amazon.png' />
                        <img alt="shopify" src='https://img.icons8.com/color/48/000000/shopify.png' />
                    </div>
                </div>
                <div className="himg">
                    {/* give me red shoes image */}
                    <img src="https://p7.hiclipart.com/preview/624/596/891/nike-free-nike-air-max-sneakers-shoe-red-shoes.jpg" alt="shoes" />
                </div>
            </div>
        </>
    )
}

export default Hero