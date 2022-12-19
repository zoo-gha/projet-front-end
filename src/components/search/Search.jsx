import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fuse from "fuse.js";
import { AddToCart } from "../store/actions/CartActions";
import { AddToWishList } from "../store/actions/WishActions";
import './style.css';

const Search = () =>{
    const dispatch = useDispatch();
    const [search, setSerach] = useState("");
    const products = useSelector(state => state.products);
    const fuse = new Fuse(products.products, {
        keys: ["productName", "id","productPrice"],
        threshold: 0.2,});
    const results = fuse.search(search);
    const filtered = search
    ? results.map((result) => result.item)
    : results;
    
    const addToCart = (_id) => {
        dispatch(AddToCart(_id));
    };
    const addToWish = (_id) => {
        dispatch(AddToWishList(_id))
    }


    return(
        <div className="container-1">
            <div className="search-box">
                <input type='text' placeholder='Recherche...' value={search} onChange={(e) => setSerach(e.target.value)} />
            </div>
            <div className="container">
                <div className="box_product">
                { 
                    filtered.map((item,index) =>{
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
                    })
                }
                </div>
            </div>
            
        </div>
    );
}
export default Search;