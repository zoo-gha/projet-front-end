import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../store/actions/CartActions";
import { AddToWishList } from "../store/actions/WishActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
export default function OffresCard(){
    const dispatch = useDispatch();
    const productsAll = useSelector((state) => state.products);
    
    const addToCart = (_id) => {
        dispatch(AddToCart(_id));
    };

    const addToWish = (_id) =>{
        dispatch(AddToWishList(_id));
    }
    
    
    const {products} = productsAll; 
    const ofre = products.filter(product => product.isAOffre === true);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    
    return(
        <>
            <Slider {...settings}>
                {ofre.map((item) => {
                    return (
                        <div className='box' key={item.id}>
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
            </Slider>
        </>
    );
}