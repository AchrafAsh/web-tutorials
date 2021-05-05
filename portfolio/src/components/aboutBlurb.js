import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

export default function AboutBlurb() {
    const data = useStaticQuery(graphql`
    query {
      flower: file(relativePath: { eq: "flower-mouth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fist: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="about-blurb">
            <div className="container">
                <div className="inner-blurb">
                    <div className="content">
                        <h3>The ability to create</h3>
                        <p>
                            LorCupidatat veniam ut est incididunt ut cupidatat dolore tempor et culpa est in aliquip. 
                            Nulla eu dolore veniam id adipisicing. Ex esse magna cillum nostrud. 
                            Ipsum nostrud irure aute irure eiusmod mollit qui et ex culpa. 
                            Do aute nulla occaecat eiusmod qui aliqua veniam anim. 
                            Fugiat minim et magna veniam tempor do.
                        </p>
                        <div className="btn-row">
                            <Link to='/'>View Series</Link>
                        </div>
                    </div>
                    <div className="images">
                        <div className="top-right">
                            <Img fluid={data.fist.childImageSharp.fluid} />
                        </div>
                        <div className="bottom-left">
                            <Img fluid={data.flower.childImageSharp.fluid} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
}
