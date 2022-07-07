import './projects.scss';
import projectList from "./projectList";
import { Parallax } from 'react-scroll-parallax';

export default function Projects({offsetY}) {
    return (
    <section id="projects" className="projects projects-container">
      <section className="content-wrap">
        {/* <Parallax 
          className="projects-text"
          translateY={[-100, 50]}
          
          speed={10}
        
        >Projects
        
        </Parallax> */}
        <div className="title">        
          <h2>Projects
            <div className="line"></div>
          </h2>
          
        </div>

        <div className='projects'>
          {projectList.map( (project, index ) => {
            return (
        
              <div className='project' key={index}>  
                  
                <div className="project-img"
                
                >
                    <img src={project.image} alt={project.title} />
                </div>

                <div className="project-info">
                  
                  <h1 className="project-name">{project.title}</h1>
                  <h3 className="tech-stack">{project.techStack}</h3>
                  <h4 className="project-detail">{project.summary}</h4>
                  
                  <div className="links">
                    <a href="#contact" className="link link-github">
                      <span>Github</span>
                    </a>
                    <a href="#contact" className="link link-demo">
                      <span>Demo</span>
                    </a>  
                  </div>
                </div>
              </div>
              // </Parallax>
            )
          })
          }
          
            
        </div>  
      </section>
    </section>
  )
}