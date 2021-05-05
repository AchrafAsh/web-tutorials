import React from 'react'
import { Link } from 'gatsby'
import Title from '../globals/Title'

export default function Info() {
    return (
        <section className="py-5" >
            <div className="container">
                <Title title="our story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                        Sed neque purus, euismod eu nisl eget, mattis lobortis dolor. 
                        Mauris tincidunt placerat mi, a cursus lacus eleifend quis. 
                        Nunc rutrum sapien vitae nunc ullamcorper, ut gravida neque placerat. 
                        Etiam eu felis neque. Maecenas facilisis vehicula nisl, eu imperdiet urna aliquam vitae. Suspendisse potenti. 
                        Donec tristique, tellus tincidunt euismod aliquet, urna leo tempus elit, eget fringilla quam metus quis urna. 
                        Nullam fermentum massa et lobortis aliquet. Phasellus convallis ornare leo, dapibus euismod justo bibendum non.
                        </p>
                        <Link to='/about'>
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
