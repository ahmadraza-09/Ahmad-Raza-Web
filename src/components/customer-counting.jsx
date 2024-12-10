import React from 'react'
import CountUp from "react-countup";
import '../css/customer-counting.css'

const CustomerCounting = () => {
    return (
        <section className='customer-counting-section'>
            <div className="customer-counting-container">
                <div className="customers-counting-card-box">
                    <h2>
                        <CountUp start={0} end={10} duration={5} />+
                    </h2>
                    <h4>
                        Websites <br /> Developed
                    </h4>
                </div>
                <div className="customers-counting-card-box">
                    <h2>
                        <CountUp start={0} end={5} duration={5} />+
                    </h2>
                    <h4>
                        Happy <br /> Clients
                    </h4>
                </div>
                <div className="customers-counting-card-box">
                    <h2>
                        <CountUp start={0} end={100} duration={5} />%
                    </h2>
                    <h4>
                        Satisfied <br /> Clients
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default CustomerCounting
