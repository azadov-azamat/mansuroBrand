import React from "react";
import Navbar1 from "../Navbar1";
import Menu from "../Menu";
import Services from "../Services";
import Footer1 from "../Footer1";
import Example from "../test/Example";
import Carousel1 from "../Carousel1";

export default function HomePage() {
    return (
        <div className='homePage'>
            <Navbar1/>
            <Menu/>
            <Carousel1/>
            <Services/>
            {/*<Menu/>*/}
            {/*<Cards/>*/}
            <Footer1/>
            {/*<Example/>*/}
        </div>
    )
}