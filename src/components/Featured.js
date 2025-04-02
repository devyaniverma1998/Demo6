import React from 'react';
import '../styles/style.css'; // Reusing Pages.css for simplicity

function Featured() {
  return (
    <div className="container-fluid pt-5 bg-light">
    <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" >
                <h2 className="fa fa-check text-primary m-0 mr-3"></h2>
                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" >
                <h2 className="fa fa-shipping-fast text-primary m-0 mr-2"></h2>
                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" >
                <h2 className="fa fa-exchange-alt text-primary m-0 mr-3"></h2>
                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center bg-light mb-4" >
                <h2 className="fa fa-phone-volume text-primary m-0 mr-3"></h2>
                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
        </div>
    </div>
</div>
  );
}

export default Featured;