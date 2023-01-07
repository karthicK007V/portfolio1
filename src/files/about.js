import React from 'react';
import Navbar from './navbar';


const About = () => {
    return (
        <div>
          <Navbar/>
            <h1 className="Us">Abo<span>ut</span></h1>
            <section id="About">
    <div className="container mb-2 about">
      <div className="row">
        <div className="col-4">
          <div className="card  " style={{"max-width": "25rem"}}>
            <div className="card-header fs-4 bg-transparent">SSLC</div>
            <div className="card-body ">
              <h5 className="card-title ">Shri K K Naidu Higher Secondary School</h5>
              <p className="card-text">Coimbatore</p>
              <p className="card-text">Jun 2012 - Apr 2013</p>
            </div>
            <div className="card-footer bg-transparent ">Percentage - 91 %</div>
          </div>
        </div>

        <div className="col-4">
          <div className="card  " style={{"max-width": "25rem"}}>
            <div className="card-header fs-4 bg-transparent">HSC</div>
            <div className="card-body ">
              <h5 className="card-title">Shri K K Naidu Higher Secondary School</h5>
              <p className="card-text">Coimbatore</p>
              <p className="card-text">Jun 2014 - Apr 2015</p>
            </div>
            <div className="card-footer bg-transparent ">Percentage - 88 %</div>
          </div>
        </div>




        <div className="col-4">
          <div className="card  " style={{"max-width": "25rem"}}>
            <div className="card-header  fs-4 bg-transparent ">BSC (Computer Technology)</div>
            <div className="card-body ">
              <h5 className="card-title">Hindusthan College Of Arts And Science</h5>
              <p className="card-text">Coimbatore</p>
              <p className="card-text">Jun 2015 - Apr 2018</p>
            </div>
            <div className="card-footer bg-transparent ">Percentage - 75 %</div>
          </div>


        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card mb-3 " style={{"max-width": "25rem"}}>
            <div className="card-header fs-4 bg-transparent ">LLB (Bachelor of Law)</div>
            <div className="card-body ">
              <h5 className="card-title">Government Law College </h5>
              <p className="card-text">Coimbatore</p>
              <p className="card-text">Sep 2019 - Jul 2022</p>
            </div>
            <div className="card-footer  bg-transparent ">Percentage - 65 %</div>
          </div>


        </div>

        <div className="col-4">
          <div className="card mb-3 " style={{"max-width": "25rem"}}>
            <div className="card-header fs-4 bg-transparent ">Full Stack Developer Course</div>
            <div className="card-body ">
              <h5 className="card-title">Guvi </h5>
              <p className="card-text">Chennai</p>
              <p className="card-text">Aug 2022 - Nov 2022</p>

            </div>
            <div className="card-footer  bg-transparent "> Course complete</div>
          </div>


        </div>
        <div className="col-4">
          <div className="card mb-3 " style={{"max-width": "25rem"}}>
            <div className="card-header fs-4 bg-transparent ">Experience</div>
            <div className="card-body ">
              <h5 className="card-title">I ' m Fresher </h5>
              <p className="card-text">Six Months Of Learning  </p>
            </div>
            <div className="card-footer  bg-transparent ">Coimbatore</div>
          </div>


        </div>
      </div>
    </div>
  </section>

        </div>
    );
}

export default About;
