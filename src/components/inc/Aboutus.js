import React from 'react';
import Service1 from '../images/service1.jpg';
import Service2 from '../images/service2.jpg';


const Aboutus = () => {
  return (
    <div id="section-services">
    <div class="section section-padding sigma_about-sec">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="sigma_about style-3">
              <div class="sigma_about-image-1">
                <img src={Service2} alt="img" />
              </div>
              <div class="sigma_about-image-2 d-none d-sm-block">
                <img src={Service1} alt="img"/>
              </div>
              <span class="sigma_about-exp">
                <span class="primary-color">25</span> Years Of
                <br />Experience
              </span>
              <a href="https://www.youtube.com/watch?v=AdZrEIo6UYU" class="sigma_video-btn popup-video">
                <i class="far fa-play"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="sigma_about style-3 ps-lg-4 mt-5 mt-lg-0">
              <div class="section-title">
                <span class="subtitle">About us</span>
                <h3 class="title">We're an Independent <span class="primary-color">Design &amp; Agency</span>
                </h3>
                <h4>When it comes to making multiple business decisions, it’s easy to get caught up in the weeds.
                </h4>
              </div>
              <div class="sigma_about-content">
                <p class="m-0">Your workspace should provide you more tools and resources to conquer everyday work
                  challenges and prepare you for your
                  best.</p>
                <div class="sigma_general-list style-2">
                  <ul>
                    <li>
                      <i class="far fa-check"></i>
                      <span>Research</span>
                    </li>
                    <li>
                      <i class="far fa-check"></i>
                      <span>App Design</span>
                    </li>
                    <li>
                      <i class="far fa-check"></i>
                      <span>UX Design</span>
                    </li>
                    <li>
                      <i class="far fa-check"></i>
                      <span>UI Design</span>
                    </li>
                    <li>
                      <i class="far fa-check"></i>
                      <span>Business Research</span>
                    </li>
                    <li>
                      <i class="far fa-check"></i>
                      <span>Web Design</span>
                    </li>
                  </ul>
                </div>
                <a href="#" class="sigma_btn">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default Aboutus