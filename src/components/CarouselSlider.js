
import '../styles/style.css';
import React from 'react';
function CarouselSlider() {


  return (
    <div class="container-fluid mb-3">
      <div class="row px-xl-5">
        <div class="col-lg-8 py-2">
          <div id="header-carousel" class="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#header-carousel" data-slide-to="1"></li>
              <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item  active" >
                <img class=" w-100 h-100" src="/img/carousel-1.jpg"  alt="not found"/>
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" >
                    <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                    <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/shop">Shop Now</a>
                  </div>
                </div>
              </div>
              <div class="carousel-item " >
                <img class=" w-100 h-100" src="/img/carousel-2.jpg" alt="not found" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" >
                    <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                    <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/shop">Shop Now</a>
                  </div>
                </div>
              </div>
              <div class="carousel-item " >
                <img class=" w-100 h-100" src="/img/carousel-3.jpg"  alt="not found"/>
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div class="p-3" >
                    <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                    <p class="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/shop">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pt-2" >
            <img class="img-fluid" src="/img/offer-1.jpg" alt="not found" />
            <div class="offer-text">
              <h6 class=" text-uppercase">Save 20%</h6>
              <h3 class=" mb-3">Special Offer</h3>
              <a href="/shop" class="btn btn-primary">Shop Now</a>
            </div>
            {/* <img class="img-fluid" src="/img/offer-2.jpg" alt="not found" />
            <div class="offer-text">
              <h6 class="text-white text-uppercase">Save 20%</h6>
              <h3 class="text-white mb-3">Special Offer</h3>
              <a href="/shop" class="btn btn-primary">Shop Now</a>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default CarouselSlider;