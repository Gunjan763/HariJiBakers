import Footer from "../Home/Footer.jsx";

import Header1 from "../Services/header1.jsx";
import React from "react";
import Contact from './contact.jsx';  // Use './' to indicate it's in the same folder

export default function Fourth()
{
    return(
        <div>
            <Header1/>
            <Contact/>
            <Footer/>
        </div>
    )
}