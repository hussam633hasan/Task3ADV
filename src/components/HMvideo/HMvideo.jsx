import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import "./HMvideo.css"

function HMvideo() {
  return (
    <section>
        <div className="viwe">
            <h6>| Video View</h6>
            <h1>Get Closer View & Different Feeling</h1>
            <a href='https://www.youtube.com/'><FontAwesomeIcon icon={faPlay} style={{color: "#f35525",}} /></a>
        </div>
        <div className='vedioframe'>
            <img src="./images/video-frame.jpg"/>
        </div>
        <div className='counterparent' >
            <div className='counter'>
                <h1>34</h1>
                <p> Buildings Finished Now</p>
            </div>
            <div className='counter'>
                <h1>12</h1>
                <p>Years Experience</p>
            </div>
            <div className='counter'>
                <h1>24</h1>
                <p> Awwards Won 2023</p>
            </div>
        </div>
    </section>
  )
}

export default HMvideo