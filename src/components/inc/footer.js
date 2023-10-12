import React from 'react'

const footer = () => {
  return (
    <div id="section-footer">
    <footer class="sigma_footer sigma_footer-sec">
      <div class="container">
        <div class="sigma_footer-middle text-center">
          <div class="sigma_footer-logo">
            <img src="assets/img/logo.png" alt="logo" />
          </div>
          <ul class="sigma_footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul class="sigma_social-icons">
            <li>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
          <div class="sigma_footer-copyright">
            <p class="mb-0">Copyright © 2023. All rights reserved to Markvel
            </p>
          </div>
        </div>
      </div>
    </footer>
   
  </div>
  )
}

export default footer