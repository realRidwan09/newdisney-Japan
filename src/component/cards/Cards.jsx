import React from 'react'
import './Cards.modules.css'

const Cards = (Props)=>{
    const {image, heading, description,date,link} = Props 
    
    return(
        <>
                <div>
                    <img src={image} alt="" />
                    <h3>{heading}</h3>
                    <p>{description}</p>
                    <p>{date}</p>
                    <a href="https://www.disney.co.jp/fc">{link}</a>
                </div>
        </>
    )
}



export default Cards