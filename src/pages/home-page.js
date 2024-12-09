import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'
import SocialMediaFixed from '../components/socialmedia-fixed'
import Services from '../components/services'



const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Footer />
            <SocialMediaFixed />
        </>
    )
}

export default HomePage
