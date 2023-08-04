import React, { useContext, useEffect } from 'react'
import './Home.css'
import { sender } from '../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';


const Home = () => {
  let { mode, setMode } = useContext(sender)
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <div className={`container-fluid text-${mode ? 'light' : 'dark'}  mt-5 bg-${mode ? "dark" : "light"}`} id='Home'>
        <div className="row align-items-center vh-100 ">
          <Header />
          <div className=" col-12 col-sm-6 ">
            <h1>Hello!</h1>
            <br />
            <h2>Hi I'm Monika Korde</h2>
            <br />
            <h4>Frontend Developer</h4>
            <br />
            <p>I am doing Full Stack developer course from Centum Foundation. I want to use enhance my Skills by getting placed in a good company.</p>
          </div>
          <div className="col-12 col-md-6 Home">
          <img data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" src="image/developer_k02jzrgohphqyu (1).gif" alt="" width="100%" height="500px" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home