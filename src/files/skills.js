import React from 'react';
import ima1 from "../image/html.svg"
import ima2 from "../image/bootstrap.svg"
import ima3 from "../image/cs.svg"
import ima4 from "../image/javascript.svg"
import ima5 from "../image/mongodb.svg"
import ima6 from "../image/mysql.svg"
import ima7 from "../image/no.svg"
import ima8 from "../image/nodejs.svg"
import ima9 from "../image/github.svg"
import ima10 from "../image/npm.svg"
import ima11 from "../image/postman.svg"

import ima12 from "../image/react.svg"
import Navbar from './navbar';


const Skills = () => {
  return (
    <>
      <Navbar />
      <h1 className="skill  m-0" id="Skills">Skil<span>ls</span></h1>
      <section className="skil">
        <div className="container">



          <div className="row">



          <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima1}  className="card-img-top"/>          <div className="card-body">
                <p className="card-text">HTML</p>
              </div>
            </div>
            <div className="card  m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima3}  className="card-img-top"/>          <div className="card-body">
                <p className="card-text">CSS</p>
              </div>
            </div>
            <div className="card  m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima2}  className="card-img-top"/>
              <div className="card-body">
                <p className="card-text">Bootstrap</p>
              </div>
            </div>

            <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima4}  className="card-img-top"/>          <div className="card-body">
                <p className="card-text">JAVASCRIPT</p>
              </div>

            </div>
          



          </div>

          <div className='row'>


        <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima12} className="card-img-top" />          <div className="card-body">
                <p className="card-text">REACT</p>
              </div>

            </div>
            <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima9}  className="card-img-top"/>
              <div className="card-body">
                <p className="card-text">GITHUB</p>
              </div>

            </div>
            <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima6}  className="card-img-top"/>            <div className="card-body">
                <p className="card-text">MYSQL</p>
              </div>
            </div>
            <div className="card  m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima5}  className="card-img-top"/>            <div className="card-body">
                <p className="card-text">MONGODB</p>
              </div>
            </div>





          </div>

          <div className="row">



         
            <div className="card  m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima7}  className="card-img-top"/>            <div className="card-body">
                <p className="card-text">NODEJS</p>
              </div>
            </div>

            <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima10} className="card-img-top" />            <div className="card-body">
                <p className="card-text">NPM</p>
              </div>

            </div>
            <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima8}  className="card-img-top"/>            <div className="card-body">
                <p className="card-text">NODE</p>
              </div>

            </div>
            <div className="card m-4 mt-5" style={{ "width": "15rem", "height": "12rem" }}>
              <img src={ima11} className="card-img-top" />            <div className="card-body">
                <p className="card-text">POSTMAN</p>
              </div>

            </div>



          </div>



        </div>
    {/* </div> */}
  </section>
  </>
        
    );
}

export default Skills;



