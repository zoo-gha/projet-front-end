import React from "react";
import './Home.css';
import Slider from "./Slider";
import Rayons from './Rayons';
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Comments from "./Comments";
import OffresPro from "../product/OffresPro";

const Home = () => {
    return(
        <>
            <Slider />
            <OffresPro />
            <Rayons />
            <Banner1 />
            <Banner2 />
            <Banner3 />
            <Comments />
        </>
    );
}

export default Home;