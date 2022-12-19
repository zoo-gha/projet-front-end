import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, changeQuantity, clearCart } from "../store/actions/CartActions";


const Cart = () => {
    
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log(cart.products)

    const remove = (id) => {
        dispatch(removeFromCart(id));
    };

    const changeQty = (e, id) => {
        const quantity = e.target.value;
        dispatch(changeQuantity(quantity, id));
    };

    const clear = () => {
        dispatch(clearCart());
    };

    const totalPrix = () => {
        let total = 0;
        if (cart.products.length) {
            for (let product of cart.products) {
                total += product.productPrice * product.quantity;
            }
        }
        return total;
    };
    
    const totalPrice = () => {
        return totalPrix();
    };

    
    const prixLiv = 15 ;
    
    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cart.products.length === 0 && <div className="container no-items product"><h1>Aucun Produits Ajouter au panier</h1></div> }
                        {cart.products.map((item, index) => {
                            console.log(cart.products.length)
                            console.log(typeof(cart.products))
                            console.log(cart.products)
                            return(
                                <div className="cart-list product d_flex" key={index}>
                                    <div className="img1">
                                        <img src={item.productImg} alt='' />
                                    </div>

                                    <div className="cart-details">
                                        <h3>{item.productName}</h3>
                                        <h4>{item.productPrice} dh  </h4>
                                    </div>

                                    <div className="cart-items-functions">
                                        <div className="removeCart">
                                            <button className="removeCart" onClick={() => remove(item.id)}><i className="fa-solid fa-xmark"></i></button>
                                        </div>

                                        <div className="cartControl d_flex">
                                            <input
                                                type="number"
                                                size={2}
                                                min={1}
                                                max={100}
                                                onChange={(e) => changeQty(e, item.id)}
                                                value={item.quantity}
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="cart-item-price"></div>
                                </div>
                                

                            )
                        })}
                    </div>
                    {cart.products.length > 0 && 
                    <div className="cart-total ">
                    <div className="flex product cont" >
                        <h2>Récapitulatif du Panier : </h2>
                        <div className="d_flex">
                            <h4>Total Achats : </h4>
                            <h3>{totalPrice()} dh</h3>
                        </div>
                        <div className="d_flex">
                            <h4>Prix livraison : </h4>
                            <h3>{totalPrice() === 0 ? 0 : prixLiv} dh</h3>
                        </div>
                        <div className="d_flex">
                            <h4>Total Commande : </h4>
                            <h3>{totalPrice() === 0 ? 0 :totalPrice() + prixLiv} dh</h3>
                        </div>
                        <div className="d_flex">
                            <Link to="/login"><button className="valide-C">Commande validée</button></Link>
                        </div>
                        <div className="d_flex">
                            <Link to="/shop"><button className="continuer">Continuer les achats</button></Link>
                        </div>
                        <div className=" d_flex">
                    <button className="Annuler" onClick={()=>clear()}>Annuler la Commande</button>
                        </div>
                    </div>
                    
                </div>}
                    
                    
                    </div>
            </section>
        </>
    )
}

export default Cart