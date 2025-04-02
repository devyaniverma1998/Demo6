import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

function Header() {
  return (
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <button className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" data-target="#navbar-vertical">
            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </button>
          <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical">
            <div className="navbar-nav w-100">
              <div className="nav-item dropdown dropright">
                <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown">
                  Home <i className="fa fa-angle-right float-right mt-1"></i>
                </Link>
                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                  <Link to="/about" className="dropdown-item">About Us</Link>
                  <Link to="/shop" className="dropdown-item">Shop</Link>
                  <Link to="/contact" className="dropdown-item">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <Link to="/" className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/shop" className="nav-item nav-link">Shop</Link>
                <Link to="/detail" className="nav-item nav-link">Shop Detail</Link>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <Link to="/" className="btn px-0">
                  <i className="fas fa-heart text-primary"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle">0</span>
                </Link>
                <Link to="/" className="btn px-0 ml-3">
                  <i className="fas fa-shopping-cart text-primary"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle">0</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
