import './skills.scss';

export default function Skills() {
  return (
    <section className="container skills-container">
      <section className="content-wrap">
        <div className="title">        
          <h2>
            Skills
            <div className="line"></div>
          </h2>  
        </div>

        <div className="content">
          <section className="skills">
            <div className="skill javascript">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png" alt="" />
            </div>

            <div className="skill html">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png" alt="" />
            </div>

            <div className="skill css">
              <img src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" alt="" />
            </div>

            <div className="skill progresql">
              <img src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png" alt="" />
            </div>

            <div className="skill python">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png" alt="" />
            </div>

            <div className="skill ruby">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png" alt="" />
            </div>

            <div className="skill react">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            </div>

            <div className="skill node-js">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="" />
            </div>

            <div className="skill git">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png" alt="" />
            </div>

            {/* <div className="skill heroku">
              <img src="https://cdn.freebiesupply.com/logos/large/2x/heroku-logo-png-transparent.png" alt="" />
            </div> */}

          </section>
        </div>
      </section>
    </section>
  )
  
}

