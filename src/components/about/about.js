import './about.scss';
import avatar from '../../assets/avartar.png'

export default function About() {
  return (
    <section id='about' className="container about-container">
      <section className="content-wrap">
        <div className="title">        
          <h2>About Me 
            <div className="line"></div>
          </h2>
          
        </div>
        
        <div className='box'>
          <div className="detail">
            <p>
              I am a junior software engineer who is customer-focused, team oriented, and has a passion for developing good quality products that are customised and stylised to suit each client. 
            </p>
              
            <p>
              I would like to contribute to a positive workplace culture that fosters growth and diversity. My goal is ultimately to help people live better, more convenient lives through the use of technology.
            </p>
          </div>
        </div>

        <div className='avatar-img'> 
          <img src={avatar} alt="" />
          <div className="background"></div>
        </div>
      </section>

      
      {/* <div className="shape circle1"></div> */}

    </section>
  )
}