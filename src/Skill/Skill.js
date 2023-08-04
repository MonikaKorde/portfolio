import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import { BiLogoHtml5 } from "react-icons/bi";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import './Skill.css'
import { sender } from '../Store';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Skill = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    let Data = [
        {
            id: 1,
            icon: <BiLogoHtml5 />,
            title: "HTML",
            colour: "blue",
        },
        {
            id: 2,
            icon: <SiCss3 />,
            title: "CSS",
            colour: "orange",
        },
        {
            id: 3,
            icon: <FaBootstrap />,
            title: "BOOTSTRAP",
            colour: "violet",
        },
        {
            id: 4,
            icon: <DiJavascript1 />,
            title: "JAVASCRIPT",
            colour: "yellow",
        },
        {
            id: 5,
            icon: <FaReact />,
            title: "REACT",
            colour: "indigo",

        }
    ]
    let [picker, setPicker] = useState(Data[0])

    let { mode, setMode } = useContext(sender)


    return (
        <>
            <div className={`container-fluid text-${mode ? 'light' : 'dark'} bg-${mode ? "dark" : "light"}`} id='Skill'>
                <Header title="My Skills " />
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="row align-item-center justify-content-center">
                    <div className="col-md-2">
                        {
                            Data.map((e) => {
                                return (
                                    <div className='border border-dark text-center mb-2 rounded shadow'>
                                        <span className='icon_card' onMouseEnter={() => setPicker(e)} style={{ fontSize: '60px', color: e.colour }}>{e.icon}</span>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className={`col-md-5 text-center border border-light shadow rounded`}>
                        <span style={{ fontSize: '200px', color: picker.colour }}>
                            {picker.icon}
                        </span>
                        <h1>{picker.title}</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skill