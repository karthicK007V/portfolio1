import React from 'react';
import ima from "../image/Photo.jpeg"
import Navbar from './navbar';
import Typewriter from 'typewriter-effect'

const Home = () => {
    return (
        <div> <Navbar/>
             <div>
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="name col-md-5">Hello  I  m <span className="named">Karthick V</span></h2>
            <p className="auto ">I' m 
              <Typewriter
              onInit={(typewriter)=>{
                typewriter.typeString("Fresher")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Front End Developer").pauseFor(1000).pause()
                .start();
                
                
              }}
            />
              </p>

            <a href="https://wa.me/+919994729177" target="blank"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/karthick-v-3a3b17241/" target="blank"><i
                className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/karthicK007V" target="blank"><i className="fa-brands fa-github"></i></a>
            <a href="mailto:karthi.16v@gmail.com" target="blank"><i className="fa fa-envelope "
                style={{"font-size":"60px" }}></i></a>
                
                <a href="https://karthick-resume.netlify.app/" target="blank"><i class="fa-solid fa-id-card"
                style={{"font-size":"60px" }}></i></a>
                

          </div>
          <div className="col-6">
            <img className="image  col-6 "  src={ima} alt="Karthick"/>

          </div>
        </div>
      </div>


    </section>
  </div>
        </div>
    );
}

export default Home;
