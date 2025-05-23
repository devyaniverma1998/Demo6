import React from 'react';
import '../styles/style.css';



function Offer() {
  return (
    <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
            <div className="col-md-6">
                <div className="product-offer mb-30" >
                    <img className="img-fluid" src="/img/offer-1.jpg" alt="not found"/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="/shop" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-offer mb-30" >
                    <img className="img-fluid" src="/img/offer-2.jpg" alt="not found"/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="/shop" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Offer;