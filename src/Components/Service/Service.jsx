import React from "react";
import Header from "../Header/Header";
import About from "./About/About";
import SubService from "./SubService/SubService";
import Paralax from "./Paralax/Paralax";
import Footer from "../Footer/Footer";


const Service = () => {
    return (
        <div>
            <Header />

            <About />
            <Paralax />
            <SubService />

            <Footer />
        </div>
    )
}

export default Service;