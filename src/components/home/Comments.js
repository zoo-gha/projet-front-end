import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DataCooments from "../data/DataCooments";
import comment from './imageRayons/comment.jpg';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
      <div className='control-btn' onClick={onClick}>
          <button className='next'>
              <i className='fa fa-long-arrow-alt-right'></i>
          </button>
      </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
      <div className='control-btn' onClick={onClick}>
          <button className='prev'>
              <i className='fa fa-long-arrow-alt-left'></i>
      </button>
      </div>
  )
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <div className="menu">
        <h2 className="heading">Avis Clients </h2>
        <div className="container">
          <Slider {...settings} className='slider'>
          {
            DataCooments.map((item, index) => {
              return(
                

                  <div className="box-client" key={index}>
                    <div className="boxs">
                      <div className="content">
                        <img src={comment} alt='' />
                        <h3 className="nameClient">{item.cName}</h3>
                        <p className="commCl">{item.cContent}</p>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
            
                
              );
            })
          }
          
          </Slider>
          </div>
      </div>
    );
  }
}