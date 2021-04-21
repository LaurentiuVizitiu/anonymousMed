import React from 'react'
import {Link} from 'react-router-dom';
import '../../App.css';
import '../pages/Team.css';

function Team() {
    return (
<div id="team" className="team mt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="section-title">
            <h2>Team</h2>
            <p>Our Amazing hardworking and enthusiastic team.
              Our Amazing hardworking and enthusiastic team
            </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div className="member">
                <div className="image">
                  <img src="../images/home.jpg" className="img-fluid" alt=""/>
                </div> 
                <div className="member-info">
                  <h4>Jessica Chang</h4>
                  <span> Executive Officer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <div className="social">
                    <Link to=''><i className="fab fa-twitter"></i></Link>
                    <Link to=''><i className="fab fa-facebook"></i></Link>
                    <Link to=''><i className="fab fa-instagram"></i></Link>
                    <Link to=''><i className="fab fa-linkedin"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member">
                <div className="image"><img src="../images/home.jpg" className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>Jacqueline Chang</h4>
                  <span>Medicine Department</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="social">
                    <Link to=''><i className="fab fa-twitter"></i></Link>
                    <Link to=''><i className="fab fa-facebook"></i></Link>
                    <Link to=''><i className="fab fa-instagram"></i></Link>
                    <Link to=''><i className="fab fa-linkedin"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member">
                <div className="image"><img src='../images/home.jpg' className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>John Doe</h4>
                  <span>MS</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="social">
                    <Link to=''><i className="fab fa-twitter"></i></Link>
                    <Link to=''><i className="fab fa-facebook"></i></Link>
                    <Link to=''><i className="fab fa-instagram"></i></Link>
                    <Link to=''><i className="fab fa-linkedin"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member">
                <div className="image"><img src='../images/home.jpg' className="img-fluid" alt=""/></div>
                <div className="member-info">
                  <h4>John Doe</h4>
                  <span>MS</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="social">
                    <Link to=''><i className="fab fa-twitter"></i></Link>
                    <Link to=''><i className="fab fa-facebook"></i></Link>
                    <Link to=''><i className="fab fa-instagram"></i></Link>
                    <Link to=''><i className="fab fa-linkedin"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Team;