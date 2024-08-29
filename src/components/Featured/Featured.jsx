import "./Featured.css";
import React, { useState } from 'react';
function Featured() {

    const faqs = [
        'Best useful links ?',
        'How does this work ?',
        'Why is Villa Agency the best ?',
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="Featured">
            <div className="Featuredimages">
                <img className="featured-icon" src="/Task2/images/featured-icon.png" />
                <img className="featured-img" src='/Task2/images/featured.jpg' />
            </div>
            <div className="HM">
                <div className="Featuredtxt">
                    <h4>| Featured</h4>
                    <h1>Best Appartment & Sea view</h1>
                </div>
                <div className="accordion-containerr " id='faq'>
                    {faqs.map((faq, index) => (
                        <div key={index} className="accordion-i">
                            <div className="accordion-headerr" onClick={() => toggleFAQ(index)}>
                                <span>{faq}</span>
                            </div>
                            {openIndex === index && (
                                <div className="accordion-contentt">
                                    <p>Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="info">
                <div className="info-hh">
                    <img src="/Task2/images/info-icon-01.png" />
                    <div>
                        <h1>250 m2</h1>
                        <p>Total Flat Space</p>
                    </div>
                </div>
                <div className="info-hh">
                    <img src="/Task2/images/info-icon-02.png" />
                    <div>
                        <h1>Contract</h1>
                        <p>Contract Ready</p>
                    </div>
                </div>
                <div className="info-hh">
                    <div>
                        <img src="/Task2/images/info-icon-03.png" />
                        <p>Process</p>
                    </div>
                    <div>
                        <h1>Payment</h1>
                        <p>Payment</p>
                    </div>
                </div>
                <div className="info-hh">
                    <div>
                        <img src="/Task2/images/info-icon-04.png" />
                        <p>Control</p>
                    </div>
                    <div>
                        <h1>Safety</h1>
                        <p>24/7 Under</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured