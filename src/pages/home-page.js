import React from 'react'
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Raza Webs Solution- Professional Web Development & Design Services</title>
                <meta name="description" content="Raza Webs offers expert web development and design services tailored to help businesses establish a strong online presence. From custom websites to responsive designs, we ensure innovative and user-friendly solutions to meet your needs." />
                <meta name="keywords" content="Raza Webs, Raza Webs Solution,web development services,custom website development services, business website development services, real estate website development services, website development services near me, website development services in india, website design and development services, website development and seo services, website & app development services, best website design and development services, website development services bhubaneswar, website development services bangalore, best website development services in india, best professional website development services, b2b website development services, website development services in chennai, chandigarh website development services, corporate website development services, custom wordpress website development services, asu career and professional development services website, integrated child development services official website, custom website design and development services, website development company delhi, website development company delhi ncr, website development company in dwarka, website development company in dhanbad, ecommerce website development company delhi, dynamic website development services, website design and development services near me, ecommerce website design and development services, e commerce web developer near me, website development services in gurgaon, website development company in gorakhpur, website development company in greater noida, website development services hyderabad, web design services near me, custom website development services, professional website design services, affordable web development services, business website development services, ecommerce website development company, best website design and development services, website developers near me, SEO-friendly website development services, dynamic website development services, real estate website development services, responsive website design services, corporate website development solutions, b2b website development services, WordPress website development services, website and app development company, mobile-friendly website design services, website design services for startups, website redesign and maintenance services, web development company in India, top website development services in noida, top website development services in delhi" />
                <link rel="canonical" href="https://razawebs.com" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Raza Webs Solution",
                        "telephone": "+91 9297829642",
                        "url": "https://razawebs.com",
                        "description": "Raza Webs Solution provides professional web development and design services to help businesses grow online with innovative, user-friendly, and SEO-focused solutions.",
                        "areaServed": ["India", "Global"],
                        "availableLanguage": ["English", "Hindi"]
                    })}
                </script>
            </Helmet>
            <Navbar />
            <Hero />
            <Services />
            <WhoWeAre />
            <CustomerCounting />
            <Footer />
            <SocialMediaFixed />
        </>
    )
}

export default HomePage
