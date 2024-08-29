import HeaderPages from "../../components/HeaderPages/HeaderPages"
import "./ContactUs.css"

function ContactUs() {
  return (
    <div className="Pproperties">
      <div className="header-pages-content">
        <button>Home / Contact Us</button>
        <h1>Contact Us</h1>
      </div>
      <HeaderPages />
      <div className="contener">
      <div className="Row-1">
        <div className="col-1">
          <div className="col-1-title" >
            <h6>| Contact Us</h6>
            <h1>Get In Touch With Our Agents</h1>
          </div>
          <div className="txt">
            <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
          </div>
          <div className="Contact-box">
            <div className="phone2">
              <img src="/Task2/images/phone-icon.png" />
              <div>
                <h6>010-020-0340</h6>
                <span>Phone Number</span>
              </div>
            </div>
            <div className="email2">
              <img src="/Task2/images/email-icon.png" />
              <div>
                <h6>info@villa.co</h6>
                <span>Business Email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">
        <form class="form-contactUs">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button className="btn2">Send</button>
        </form>
        </div>
      </div>
      <div className="Row-2">
        <div className="map2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameborder="0" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default ContactUs