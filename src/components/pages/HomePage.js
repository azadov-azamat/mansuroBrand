import React from "react";
import Menu from "../Menu";
import Services from "../Services";
import Footer from "../Footer";
import Carousel1 from "../Carousel1";

export default function HomePage() {
    return (
        <div className='homePage'>

            <Menu/>
            <Carousel1/>
            <Services/>
            <Footer/>
        </div>
    )
}