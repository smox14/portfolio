import './contact.scss'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
// import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
  return (
    <div className="container contact-container" id="contract">
      <section className="content-wrap">
        <div className="title">
          <h2>Let's connect!
            <div className="line"></div>
          </h2>

        </div>

        <div className="email"> <p>kantarat.teo@gmail.com</p></div>

        <div className="contact-links">  
          <a href="https://www.linkedin.com/in/kantarat/" target="_blank" rel="noreferrer" className="contact linkedin">
            <AiOutlineLinkedin className='icon'/>
            
          </a>

          <a href="https://github.com/smox14" target="_blank" rel="noreferrer" className="contact github">
            <AiOutlineGithub className='icon'/>
            
          </a>


        </div>

      <div className="footer"><span>&copy; 2022 Katie Teo </span></div>  
      </section>
    </div>
  )
}
