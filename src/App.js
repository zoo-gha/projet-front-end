import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import WishList from './components/wishList/WishList';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import LoginForm from './components/login/LoginForm';
import Inscription from './components/signUp/Inscription';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Navbar from './components/header/Navbar';

export default function App() {
    return(
        <>
            <Router>
                <Navbar />

                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route path='/cart' exact>
                            <Cart />
                        </Route>
                        <Route path='/wishList' exact>
                            <WishList />
                        </Route>
                        <Route path='/blog' exact>
                            <Blog />
                        </Route>
                        <Route path='/contact' exact>
                            <Contact />
                        </Route>
                        <Route path='/about' exact>
                            <About />
                        </Route>
                        <Route path='/shop' exact>
                            <Shop />
                        </Route>
                        <Route path='/login' exact>
                            <LoginForm/>
                        </Route>
                        <Route path='/inscription' exact>
                            <Inscription/>
                        </Route>
                        <Route path='/search' exact>
                            <Search/>
                        </Route>
                    </Switch>

                <Footer />
            </Router>
        </>
    )
}
