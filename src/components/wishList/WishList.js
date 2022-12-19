import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishList } from "../store/actions/WishActions";
import { AddToCart } from "../store/actions/CartActions";

const WishList = () => {

    const wish = useSelector((state) => state.wishList);
    const dispatch = useDispatch();
    console.log(wish.products)
    const remove = (_id) =>{
        dispatch(removeFromWishlist(_id))
    };
    const clear = () =>{
        dispatch(clearWishList())
    }
    const addToCart = (_id) =>{
        dispatch(AddToCart(_id));
    }

    return (
        <>
            <section className="wish-items">
            {wish.products.length === 0 && <div className="no-items product"><h1>Aucun Produits Ajouter à la liste préférer</h1></div> }
                <div className="container d_flex box_product">

                    {wish.products.map((item,index) =>{
                        return(
                            <div className='box' key={index}>
                                <div className='product mtop'>
                                    <div className='img'>
                                        <img src={item.productImg} alt='' />
                                        
                                    </div>
                                        <div className='product-details'>
                                        <h3>{item.productName}</h3>
                                        <h4>{item.productPrice} dh</h4>
                                        <div className='price'>
                                            <button onClick={() => remove(item.id)}><i className="fa-solid fa-xmark"></i></button>
                                            <button onClick={() => addToCart(item.id)}>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        );
                    })}

                </div>                
            </section>
            {wish.products.length !== 0 &&  
            <div className="container  section-button">
                <Link to="/shop"><button className="continuer">Continuer les achats</button></Link>
                <br/><br/>
                <button className="valide-C" onClick={() => clear()}>Annuler Tous</button>
                </div>}
            
        </>
    )
} 


export default WishList