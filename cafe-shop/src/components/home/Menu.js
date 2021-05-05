import React, { Component } from 'react'
import Title from '../globals/Title'

import Img from 'gatsby-image'

const getCategories = items => {
    let tempItems = items.map(item => (
        item.node.category
    ))
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ["all", ...categories]
    return categories
}

export default class Menu extends Component {
    state = {
        items: this.props.items.edges,
        coffeeItems: this.props.items.edges,
        categories: getCategories(this.props.items.edges)
    }

    handleItems = (category) => {
        let tempItems = [...this.state.items]
        if(category === "all"){
            this.setState({ coffeeItems: this.state.items })
        }else{
            let items = tempItems.filter(({node}) => node.category === category)
            this.setState({ coffeeItems: items })
        }
    }

    render() {
        if(this.state.items.length > 0){
            return (
            <section className="menu py-5">
                <div className="container">
                    <Title title="best of our menu" />
                    <div className="row mb-5">
                        <div className="col-10 mx-auto text-center">
                            {this.state.categories.map((category, index) => (
                                <button onClick={() => {this.handleItems(category)}} type="button" className="btn btn-yellow text-capitalize m-3" key={index}>
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        {this.state.coffeeItems.map(({node}) => (
                            <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                <div>
                                    <Img fixed={node.image.fixed} />
                                </div>
                                <div className="flex-grow-1 px-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-0"><small>{node.title}</small></h6>
                                        <h6 className="mb-0 text-yellow">$<small>{node.price}</small></h6>
                                    </div>
                                    <p className="text-muted">
                                        <small>{node.descritption.descritption}</small>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            )
        } else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu" />
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>there are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
