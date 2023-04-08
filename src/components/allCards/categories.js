import React from 'react'
import CardCss from "./card.module.css"

const Categories = ({ slide }) => {
    return (
        <>
            <div style={{ background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("${slide.image.default.src}")`, backgroundSize: "cover", backgroundPosition: "center top" }} className={`${CardCss.categoryCard} textCenter`}>
                <h3 className={CardCss.heading}>{slide.heading}</h3>
                <button>SHOP NOW</button>
            </div>
        </>
    )
}

export default Categories