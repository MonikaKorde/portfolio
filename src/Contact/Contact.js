import React, { useContext } from 'react'
import { AiFillFacebook, AiFillInstagram ,AiFillGithub } from "react-icons/ai";
import Form from './Form';
import Header from '../Header';
import { sender } from '../Store';


const Contact = () => { 
  
  let {mode,setMode}=useContext(sender)
 
  return (
    <>
        <div className={`container-fluid text-${mode?"light":"dark"} bg-${mode?"dark":"light"}`} style={{paddingBottom:'10px'}} id='Contact'>
          <Header title='Contact Me' />
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1>Lets get in touch</h1>
                    <p>Feel free to get in touch with me. I am always open to discussing new project. Creative ideas or opportunities to be part of your vision.</p>
                    <h5>Living In:</h5>
                    <p>Nagpur</p>
                    <h5>Call:</h5>
                    <p>+91 8830315708</p>
                    <a href="https://www.facebook.com/monika.korde.50"><AiFillFacebook /></a>
                    <a href="instagram.com/korde.monika"><AiFillInstagram /></a>
                    <a href="https://github.com/MonikaKorde"><AiFillGithub /></a>
                </div>
                <div className="col-12 col-md-6">
                  <Form />
                </div>

            </div>
        </div>
    </>
  )
}

export default Contact
