import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand fs-1" href="#">Portfo<span>lio.</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto fs-3 p-3 ms-1 mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/"} className="nav-link " >Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link" href="#About">About</Link>
          </li>
          <li className="nav-item">
            <Link to={"/skill"} className="nav-link" href="#Skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to={"/pro"} className="nav-link" href="#projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-link" href="#contact">Contact</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

        </div>
    );
}

export default Navbar;
