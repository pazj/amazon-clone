import React from 'react'
import "./Home.css"
import Product from './Product'


function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            
            {/*WE need to create the component for the products */}
            <div className="home__row">
                {/*line of products */}
                <Product id="1232131" title='A Court of Thorns and Roses Box Set' 
                price={49.71} 
                image='https://images-na.ssl-images-amazon.com/images/I/81CQJMIY+QL.jpg' rating={5 }/>
                
                <Product id="1238765" title='Demon Slayer: Kimetsu no Yaiba, Vol. 1 (1) ' 
                price={49.71} 
                image='https://m.media-amazon.com/images/P/B07CTBBGZF.01._SCLZZZZZZZ_SX500_.jpg' rating={5 }/>   
              
                <Product id="12321341" title='From Blood and Ash (Blood And Ash Series Book 1)' 
                price={29.99} 
                image='https://m.media-amazon.com/images/I/51nh3JnQNsL.jpg' rating={5 }/>
                {/*line of products */}
                <Product id="49538094" title="One Piece: Monkey D. Luffy"
                 price={239.0}
                 rating={4}
                 image='https://images-na.ssl-images-amazon.com/images/I/513MbiXUHIL._AC_SL1000_.jpg'/>

            </div>
            <div className="home__row">
                {/*line of products */}
                <Product id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'/>
                
                {/*line of products */}
                <Product id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_ret"
                />
                
                {/*line of products */}
                <Product id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
            </div>

            <div className="home__row">
                {/*line of products */}
                <Product id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - 
                Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
            </div>
            
            </div>
        </div>
    )
}

export default Home
