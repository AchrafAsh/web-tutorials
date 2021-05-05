import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function Banner() {
    const data = useStaticQuery(graphql`
    query {
      poppingShades: file(relativePath: { eq: "poppin-shades.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      diamonds: file(relativePath: { eq: "diamonds.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sexyOrange: file(relativePath: { eq: "sexy-orange.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                    <Img fluid={data.diamonds.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Achraf<br/>AIT SIDI HAMMOU</div>
                    <div className="main-image">
                        <Img fluid={data.poppingShades.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.sexyOrange.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
            <div className="fixed-misc">Web and Mobile Developer</div>
        </div>
    )
}
