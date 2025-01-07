import React from 'react'
import '../app/styles/skills.css';

const skills = () => {
  return (
    <div id='skills' className='skills-container '>
       <div className='skills-grid'>

        {/*first colum heading and paragraph*/}
           <div data-aos="zoom-in-up" className='skills-left'>
             <h2 className='skills-heading'>Technologies I Work With </h2>
             <p className='skills-text'>
              I have a solid foundation in web development,specializing in HTML in CSS and JavaScript.My experience extands to my frameworks like React and Nextjs to create dynamic and user-friendly applications.I&apos;m  also proficient in Tailwind CSS for efficient styling and design.With a passion for learning.I stay updated on the latest technologies to enhance my skills set and contribute effectively to projects.</p>
          </div>

          {/*second colum skills*/}
          <div className='skills-right'>
          <div className='skills-icons-grid'>
                        <div className='skills-space'>
                          <h2 data-aos="zoom-in-up">TypeScript</h2>
                          <h2 data-aos="zoom-in-up">React.js</h2>
                          
                        </div>
                           <div className='skills-space'>
                             <h2 data-aos="zoom-in-up">Tailwind</h2>
                             <h2 data-aos="zoom-in-up">CSS</h2>
                            
                           </div>
                           <div className='skills-space'>
                           <h2 data-aos="zoom-in-up">Next.js</h2>
                           <h2 data-aos="zoom-in-up">Node.js</h2>
                           </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default skills
