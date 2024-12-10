import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import Services from '../components/services'
import WhoWeAre from '../components/who-we-are'
import CustomerCounting from '../components/customer-counting'



const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <WhoWeAre/>
            <CustomerCounting/>
            <Footer />
            <SocialMediaFixed />
        </>
    )
}

export default HomePage
