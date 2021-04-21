import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
  <footer className="footer py-4 mt-5">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left">Copyright ©2021 Vizitiu Laurențiu-Constantin</div>
            <div className="col-lg-4 my-3 my-lg-0">
              <Link to='/' className='btn btn-back btn-social mx-2'>  
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to='/' className='btn btn-back btn-social mx-2'>  
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to='/' className='btn btn-back btn-social mx-2'>  
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
            <div className="col-lg-4 text-lg-right">Disertație USV</div>
        </div>
    </div>
</footer>
  );
}

export default Footer;