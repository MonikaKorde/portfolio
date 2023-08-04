import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import './About.css'
import { GrSettingsOption } from "react-icons/gr";
import { sender } from '../Store';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    let [show, setShow] = useState(false)
    let { mode, setMode } = useContext(sender)

    let Data = [
        {
            id: 1,
            title: "Name",
            info: "Monika Korde",
        },

        {
            id: 2,
            title: "Email",
            info: "monikakorde948@gmail.com",
        },
        {
            id: 3,
            title: "DOB",
            info: "02/05/2001",
        },
        {
            id: 4,
            title: "From",
            info: "Nagpur",
        }
    ]
    let [colorpick, setColorpick] = useState("primary")
    return (
        <>
            <div className={`container-fluid position-relative text-${mode ? 'light' : 'dark'} bg-${mode ? "dark" : "light"}`} id='About'>
                <Header title="About Me" />
                <div className="row align-item-center">
                    <div className="col-12 col-md-6 About">
                        <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src="image/developer_k02jzrgohphqyu.gif" alt="" width="100%" height="500px" />
                    </div>
                    <div className="col-12 col-md-6 ">
                        <p>Hello,
                            <br />

                            I am Monika Raju Korde from Nagpur, At post Gumgaon. I recently completed my Bachelors of Engineering from Rajiv Gandhi  College of Engineering And Research,Wanadongri Nagpur , with a specialisation in Computer Science And Engineering. My CGPA is 8.25. I have a deep interest in web development and have completed a few projects. My short-term objective is to find a job in a reputable organisation, and my long-term goal is to achieve a decent position where I can expand my career, contribute to the organisation. My interests include reading books, listening to music and cooking.</p>
                    </div>
                </div>
                <div className="row ">
                    {
                        Data.map((e) => {
                            return (
                                <div className=" col-12 col-sm-6 col-md-3 ">
                                    <div data-aos="zoom-out-up" className={`card text-bg-${colorpick} pb-3`} style={{ maxWidth: "18rem" }}>
                                        <div className='card-header'>{e.title}</div>
                                        <div className='card-body'>
                                            <p className='card-text'>{e.info}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='text-center mx-auto p-2 shadow border border-1 position-absolute top-0 end-0' style={{ width: "75px" }}>
                    <GrSettingsOption className='spinner-border border-0 bg-light ' onClick={() => setShow(!show)} style={{ fontSize: "25px", }} />
                    {
                        show &&
                        <div>
                            <button onClick={() => setColorpick("danger")} className='rounded-circle  bg-danger text-danger'>A</button>
                            <button onClick={() => setColorpick("success")} className='rounded-circle   bg-success text-success mx-2'>A</button>
                            <button onClick={() => setColorpick("warning")} className='rounded-circle bg-warning text-warning'>A</button>
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default About