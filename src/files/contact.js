import React, { useState } from 'react';
import Navbar from './navbar';

const Contact = () => {
  let formdata={
    name:"",
    email:"",
    phonenumber:"",
    message:""
}
  
  const [form,setform]=useState(formdata)


  const handelsub=(e)=>{
    e.preventDefault();
    alert("Send Successfully");
    setform(formdata)

  }  
  const Handelchange=(e)=>{
    setform(
      {[e.target.name]:e.target.value}
    )

  }

    return (
        <div>
             <Navbar/>
            <h1 className="pro  m-0" id="contact">Contact <span>Us</span></h1>
            <section className="con">
  
  <div className="container">
    <div className="row">
      <div className="col-6">
        <form onSubmit={(e)=>{handelsub(e)}}>
          <input type="text" id="name" placeholder="Name" name='form.name' value={form.name} onChange={(e)=>Handelchange(e)} required/>
          <input type="email" id="email" placeholder="Email" value={form.email} name='form.email' onChange={(e)=>Handelchange(e)} required/>

          <input type="number" id="phone" placeholder="Phone Number"  value={form.phonenumber}  name='form.phonenumber' onChange={(e)=>Handelchange(e)} required/>

          <textarea id="message" placeholder="Message" value={form.message} name='form.message' onChange={(e)=>Handelchange(e)} required></textarea>
          <button type="submit" className="btn btn-primary ">Send</button>
        </form>

      </div>
      <div className="col-md-4 text-center">
        <ul className="list-unstyled mb-0">
          <li><a href={"https://goo.gl/maps/386kdEGoL8e8fehm7"} target="blank"><i className="fas fa-map-marker-alt fa-2x"></i></a>
            <p>Coimbatore,Tamilnadu </p>
          </li>

          <li><i className="fas fa-phone mt-4 fa-2x"></i>
            <p>+91 99947 29177</p>
          </li>

          <li><a href="mailto:karthi.16v@gmail.com" target="blank"><i className="fas fa-envelope mt-4 fa-2x "></i></a>
            <p>karthi.16v@gmail.com</p>
          </li>
        </ul>

        <a href="https://wa.me/+919994729177" target="blank"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="https://www.linkedin.com/in/karthick-v-3a3b17241/" target="blank"><i
            className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/karthicK007V" target="blank"><i className="fa-brands fa-github"></i></a>
      

        <p>Get In Touch</p>
      </div>


    </div>

  </div>

  






</section>


                </div>
                )
    };
                export default Contact

            











