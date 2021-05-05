import React from 'react'
import BakgroundImage from 'gatsby-background-image'


export default function BackgroundSection({ img, styleClass, title, children }) {
    return (
        <BakgroundImage className={styleClass} fluid={img}>
            <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children} {/*To display sth else like a button*/}
        </BakgroundImage>
    )
}

BackgroundSection.defaultProps = {
    title: "default title",
    styleClass: "default-background"
}