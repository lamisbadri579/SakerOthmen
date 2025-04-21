import './Landing.css'
import img1 from '../../assets/visuals/img1.jpg'
import increase_icon from '../../assets/icons/increase-icon.svg'
import globe_icon from '../../assets/icons/globe-icon.svg'
import clock_icon from '../../assets/icons/clock-icon.svg'
import feature1 from '../../assets/visuals/img2.jpg'
import feature2 from '../../assets/visuals/img3.jpg'
import feature3 from '../../assets/visuals/img4.jpg'
import arrow_icon from '../../assets/icons/arrow_icon.svg'
import line from '../../assets/icons/line.svg'
import profile_picture from '../../assets/client-picture/profile-picture.svg'
import arrow_left from '../../assets/icons/arrow-left.svg'
import arrow_right from '../../assets/icons/arrow-right.svg'
import dots from '../../assets/icons/dots.svg'
const Landing = () => {
  return (
    <>
    <div className='hero-section'>
    <div className='hero'>
      <div className='hero-container'>
        <div className='content'>
          <h1>Tap into Global Resources: Buy Smartly and Achieve Greater Success!</h1>
          <p>Find top-quality products from reliable suppliers around the world. Make buying easy and watch your business grow like never before.</p>
          <button>Go Global Today</button>
        </div>

        <div className='visuals'>
          <img src={img1} alt="" />
        </div>
      </div>

      
    </div>
    <div className='associated-companies'>
        <p>company1</p>
        <p>company2</p>
        <p>company3</p>
        <p>company4</p>
        <p>company5</p>
      </div>

    </div>

    <div className='landing'>
      
        <h3 className='choose'>Why choose us ?</h3>
        <div className='benefits'>
        <div className="benefit1">
          <h5>Increased Efficiency</h5>
          <p>Streamline your procurement process with our advanced tools and services,making your operations faster and more 
          cost-effective.</p>
          <img src={increase_icon} alt="" />
        </div>

        <div className="benefit2">
          <h5>Global Reach</h5>
          <p>Access markets worldwide effortlessly through our extensive network, helping you connect with the best suppliers and opportunities globally.</p>
          <img src={globe_icon} alt="" />
        </div>

        <div className="benefit3">
          <h5>24/7 Support</h5>
          <p>Benefit from dedicated customer service available anytime, ensuring you receive the assistance you need, whenever you need it.</p>
          <img src={clock_icon} alt="" />
        </div>
      </div>

      <div className='features'>
        <div className="feature1">
          <div className="text">
            <div className='getstarted'>
              <img src={line} alt="" />
              <h6>GET STARTED</h6>
            </div>
            <h3>Unlock New Possibilities: Discover 
                How We Can Help You Achieve More 
                in Global Business
            </h3>
            <ul>
              <li>Explore Innovative Solutions</li>
              <li>Tap into Expert Knowledge</li>
              <li>Use the Latest Tools</li>
              <li>Benefit from Proven Strategies</li>
            </ul>
            <div className='readmore'>
              <h6>read more</h6>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
          <img src={feature1} alt="" className='image' />
        </div>

        <div className="feature2">
        <img src={feature2} alt="" className='image' />
          <div className="text">
            <div className='getstarted'>
              <img src={line} alt="" />
              <h6>GET STARTED</h6>
            </div>
            <h3>Unlock New Possibilities: Discover 
                How We Can Help You Achieve More 
                in Global Business
            </h3>
            <ul>
              <li>Explore Innovative Solutions</li>
              <li>Tap into Expert Knowledge</li>
              <li>Use the Latest Tools</li>
              <li>Benefit from Proven Strategies</li>
            </ul>
            <div className='readmore'>
              <h6>read more</h6>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
        </div>

        <div className="feature3">
          <div className="text">
            <div className='getstarted'>
              <img src={line} alt="" />
              <h6>GET STARTED</h6>
            </div>
            <h3>Unlock New Possibilities: Discover 
                How We Can Help You Achieve More 
                in Global Business
            </h3>
            <ul>
              <li>Explore Innovative Solutions</li>
              <li>Tap into Expert Knowledge</li>
              <li>Use the Latest Tools</li>
              <li>Benefit from Proven Strategies</li>
            </ul>
            <div className='readmore'>
              <h6>read more</h6>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
          <img src={feature3} alt="" className='image' />
        </div>
      </div>

      <div className="clients-opinion">
        <h4>Voices of Success:</h4>
        <h5>Happy from Our Happy Clients</h5>
        <div className="clients-opinion-container">
          <img src={profile_picture} alt="" className='profile-picture' />

          <div className='comment-and-arrows'>
          <img src={arrow_left} alt="" className='arrow-left' />
          <p>Thanks to the company&apos;s global network and reliable service, my business has experienced significant growth. Their support has been invaluable.</p>
          <img src={arrow_right} alt=""  className='arrow-right'/>
          </div>

          <h5 className='client-name'>Jennie Roberts</h5>
          <img src={dots} alt="" className='dots'/>
  


        </div>
      </div>

    </div>

    </>
  )
}

export default Landing