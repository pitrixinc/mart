import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact"
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Category/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home