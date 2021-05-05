import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/globals/BackgroundSection'
import Info from '../components/home/Info'
import Menu from '../components/home/Menu'
import Products from '../components/home/Products'
import Contact from '../components/home/Contact'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Cafe Shop" styleClass="default-background"/>
    <Info />
    <Menu items={data.menu}/>
    <Products />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img:file(relativePath:{eq:"default-background.jpeg"}){
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu:allContentfulCoffeeItem{
        edges{
          node{
            id
            title
            descritption{
              descritption
            }
            price
            category
            image{
              fixed(width:50,height:50){
                ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default IndexPage
