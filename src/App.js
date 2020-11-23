import React from "react";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Appbody from "./Components/Appbody"
import Card from "./Components/Card"
import Footer from "./Components/Footer"

const App = () => (
    <div>
        <Navbar />
        <Hero />
        <Card />
        <Appbody />
        <Footer />
    </div>
)

export default App;