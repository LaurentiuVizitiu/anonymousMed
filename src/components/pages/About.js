import React from 'react';
import '../../App.css';
import '../pages/About.css'

function About() {
    return (
        <div className="about-section clearfix py-5">
            <div className="container">
                <div className="about">
                    <img className="about-img img-fluid mb-3 mb-lg-0 rounded" src="../images/home.jpg" alt=""/>
                    <div className="about-text left-0 text-center bg-faded p-5 rounded">
                        <h2 className="about-heading mb-4">
                            <span className="about-heading-upper">Welcome</span>
                            <span className="about-heading-lower">To Our Hospital</span>
                        </h2>
                        <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Aut quod laboriosam eligendi, repellendus cumque ducimus minus libero 
                            autem sint sed deserunt qui ullam porro quasi dignissimos. Pariatur commodi hic in!
                            autem sint sed deserunt 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;