import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import SdataRayons from "./SdataRayons";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


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
const SlideCard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return(
        <>
            <Slider {...settings} className='slider'>
                {
                    SdataRayons.map((item, index) => {
                        return(
                            <Link to='/shop' key={index}>
                                <div className="rayons">
                                    <img src={item.raImg} alt='' />
                                    <div><p className="rayName">{item.raName}</p></div>
                                </div>
                            </Link>
                        );
                    })
                }
            </Slider>
        </>
    );
}
export default SlideCard;