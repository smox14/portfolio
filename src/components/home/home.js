import './home.scss';
import { HiArrowNarrowDown } from 'react-icons/hi';
import Logo from '../logo/logo';
import Resume from '../../assets/KatieTeo_Resume.pdf'


export default function Home({offsetY}) {
  return (
    <section className="container home-container" id="home">
      <div className="logo"><a href="#home"><Logo /></a></div>
      
      

      <section className="content-wrap">
        
        <div className="text">
          
          <div className="circle-container">
            <div className='circle'>
                <h1 className="name" >  
                  <h1 className='fullname'
                    style={{ transform: `translate(${offsetY * -0.5}px, -50%)`}}
                    
                  >
                    Kantarat Teo
                    </h1>
                  <h1 className="nickname"
                    style={{ transform: `translate(${offsetY * 0.5}px, -50%)`}}
                  >Katie</h1>  
                {/* <span className="fullname">Kantarat Teo</span> */}
                
                {/* <span className="nickname">KATIE</span> */}
              </h1>

            </div>

              <h1 className="name" >  
                <h1 className='fullname'
                  style={{ transform: `translate(${offsetY * -0.5}px, -50%)`}}
                >Kantarat Teo</h1>
                <h1 className="nickname"
                  style={{ transform: `translate(${offsetY * 0.5}px, -50%)`}}
                >Katie</h1>  
                {/* <span className="fullname">Kantarat Teo</span> */}
                <br></br>
                {/* <span className="nickname">KATIE</span> */}
              </h1>

          </div>
          
          <div className='role'
          style={{ transform: `translate(0%,${offsetY * -0.3}px)`}}
          >
            <h3>Software Developer</h3>
          </div>
        </div>

        <div className="buttons">
          <a href="https://drive.google.com/file/d/19xmtWyedn1djYS6VkugxEozOoznaUwjv/view?usp=sharing" target="_blank" rel="noreferrer" 
            style={{ transform: `translate(0%,${offsetY * -0.1}px)`}}
          >
            <p className="resume button">Resume</p></a>
          <a href="#contract" style={{ transform: `translate(0%,${offsetY * -0.1}px)`}}
          ><p className="contact button">Contact</p></a>
        </div>
        <div className="icon-down"><HiArrowNarrowDown /></div>
        

      </section>
      
    </section>
  )
}
