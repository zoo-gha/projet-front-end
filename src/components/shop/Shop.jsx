import React, { useState } from "react";
import './Shop.css';
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../store/actions/CartActions";
import { AddToWishList } from "../store/actions/WishActions";
import SdataRayons from '../home/SdataRayons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import OIP from './OIP.jpeg';


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
export default function Shop() {

    const dispatch = useDispatch();
    const [filt, setFilt] = useState('')
    const productsAll = useSelector((state) => state.products);

    const addToCart = (_id) => {
        dispatch(AddToCart(_id));
    };
    const addToWish = (_id) => {
        dispatch(AddToWishList(_id))
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    return(
        <>
        <div className="container ray">
            <Slider {...settings} className='slider'>
                <button onClick={() => setFilt("")}>
                    <div className="rayons">
                        <img src={OIP} alt='' />
                        <div><p className="rayName">Tous les produits</p></div>
                    </div>
                </button>
                {
                    SdataRayons.map((item, index) => {
                        return(
                            <button onClick={() => setFilt(item.raName.toLowerCase())}>
                            <div className="rayons" key={index}>
                                <img src={item.raImg} alt='' />
                                <div><p className="rayName">{item.raName}</p></div>
                            </div></button>
                        );
                    })
                }
            </Slider>
        </div>
        
        
        <div className="container">
            <div className="box_product">
                {productsAll.products.filter(p => p.categorie.indexOf(filt) !== -1).map((item, index) => {
                return (
                    <div className='box' key={index}>
                        <div className='product mtop'>
                            <div className='img'>
                                <img src={item.productImg} alt='' />
                                
                            </div>
                                <div className='product-details'>
                                <h3>{item.productName}</h3>
                                <h4>{item.productPrice} dh</h4>
                                <div className='price'>
                                    <button onClick={() => addToWish(item.id)}><i className='fa-regular fa-heart'></i></button>
                                    <button onClick={() => addToCart(item.id)}>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })}
            </div>
            
        </div>
        </>
    );
}