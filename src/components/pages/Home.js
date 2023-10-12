import React from 'react';
import Slider from '../inc/Slider';
import Marketingicon from '../inc/Marketingicon';
import Portfolios from '../inc/Portfolios';
import Aboutus from '../inc/Aboutus';
import Footer from '../inc/footer';


function Home() {
  return (
    <div>
      <Slider />
      <Marketingicon />
      <Portfolios />
      <Aboutus />
      <Footer />
    </div>
  )
}

export default Home