import React from 'react';
import '../../App.css';
import '../pages/Services.css';
import {Link} from 'react-router-dom';

export default function Services(){
    return(
        <section id="services" className="services mt-5 mb-3 py-3">
            <div className="container">
                <div className="section-title">
                    <h2 className="text-center">Services</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam optio esse earum voluptatibus repellat?</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="service shadow">
                            <div className="icon">
                                <i className="fas fa-tooth"></i>
                            </div>
                            <h4><Link to=''>Lorem Ipsum</Link></h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam optio esse earum voluptatibus repellat?</p>
                        </div>
                    </div>
                     
                     <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="service c shadow">
                            <div className="icon">
                                 <i className="fas fa-lungs"></i>
                            </div>
                            <h4><Link to=''>Lorem Ipsum</Link></h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam optio esse earum voluptatibus repellat?</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div className="service shadow">
                            <div className="icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h4><Link to=''>Lorem Ipsum</Link></h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam optio esse earum voluptatibus repellat?</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="service c shadow">
                            <div className="icon">
                                <i className="fas fa-dna"></i>
                            </div>
                            <h4><Link to=''>Lorem Ipsum</Link></h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam optio esse earum voluptatibus repellat?</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="service shadow">
                            <div className="icon">            
                                <i className="fas fa-ambulance"></i>
                            </div>
                            <h4><Link to=''>Lorem Ipsum</Link></h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam optio esse earum voluptatibus repellat?</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="service shadow">
                            <div className="icon">
                                <i className="fas fa-allergies"></i>
                            </div>
                            <h4><Link to=''>Lorem Ipsum</Link></h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam optio esse earum voluptatibus repellat?</p>
                        </div>
                    </div>

                </div>

             </div>
        </section>
    );
}