import React from 'react';

const Contact = () => {
  return (
    <div>
      <div class="contact-page">
        <div id="section-subheader">
          <div class="sigma_subheader style-10">
            <div class="container">
              <div class="sigma_subheader-inner">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>

        <div id="section-contact-form">
          <div class="sigma_contact-map">

          </div>
          <div class="section sigma_contact-sec">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div class="section-title">
                    <span class="subtitle">Call to Action</span>
                    <h3 class="title">Make a Request</h3>
                  </div>
                  <div class="sigma_form style-2">
                    <form class="mf_form_validate ajax_submit" action="/assets/sendmail.php" method="post" enctype="multipart/form-data" novalidate="novalidate">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <input type="text" name="name" placeholder="Enter Full Name" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <input type="email" name="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <input type="number" name="phone" placeholder="Phone number" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <select>
                              <option value="1" selected="">Select Subject</option>
                              <option value="2">Option 1</option>
                              <option value="3">Option 2</option>
                              <option value="4">Option 3</option>
                              <option value="5">Option 4</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-group">
                            <textarea name="message" rows="10" placeholder="Enter Message"></textarea>
                          </div>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="submit-btn">Submit Request</button>
                          <div class="server_response w-100">
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="ps-0 ps-lg-5 mt-5 mt-lg-0">
                    <div class="section-title">
                      <span class="subtitle">Office Address</span>
                      <h3 class="title">Catch us here</h3>
                      <p>As a general rule, new students take a placement test which enables teachers to determine which is the most appropriate level for the student.</p>
                    </div>
                    <div class="sigma_contact-block style-2">
                    <i class="fa fa-phone icon" aria-hidden="true"></i>
                      <div class="contact-block-inner">
                        <p>Phone number</p>
                        <h6 class="mb-0">+677488484</h6>
                      </div>
                    </div>
                    <div class="sigma_contact-block style-2">
                    <i class="fa fa-envelope icon" aria-hidden="true"></i>
                      <div class="contact-block-inner">
                        <p>Email address</p>
                        <h6 class="mb-0">info@themeely.com</h6>
                      </div>
                    </div>
                    <div class="sigma_contact-block style-2">
                    <i class="fa fa-map-marker icon" aria-hidden="true"></i>
                      <div class="contact-block-inner">
                        <p>Office Address</p>
                        <h6 class="mb-0">14/A, Eost City Hall, NYC</h6>
                      </div>
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

export default Contact