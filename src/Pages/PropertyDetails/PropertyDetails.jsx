
import { useState } from "react";
import HeaderPages from "../../components/HeaderPages/HeaderPages"
import "./PropertyDetails.css"
import Deal from "../../components/Deal/Deal";


function PropertyDetails() {
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
    <div className="Pproperties">
      <div className="header-pages-content">
        <button>Home / Single Property</button>
        <h1>Single Property</h1>
      </div>
      <HeaderPages />
      <section className="Details-content">
        <div className="Details-info">
          <img className="Details-img" src='/Task2/images/single-property.jpg' />
          <div className="Details-content-txt">
            <div>
              <h4>Apparment</h4>
              <h1>24 New Street Miami, OR 24560</h1>
            </div>
            <div>
              <p>Get the best villa agency HTML CSS Bootstrap Template for your company website. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p>
              <br />
              <p>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
            </div>
          </div>
          <div className="Details-accordion-containerr " id='faq'>
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
        <div className="info1">
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
      <Deal/>
    </div>
  )
}

export default PropertyDetails