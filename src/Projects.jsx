import React from 'react';
import { Link } from 'react-scroll';
import servIcon from './files/portfolio.png';
import shoescenter from './files/1.png';
import philtrip from './files/2.png';
import examalter from './files/3.png';
import pv1 from './files/5.png';
import p6 from './files/6.png';
import p7 from './files/7.png';
import p8 from './files/8.png';
import { FaCircle } from "react-icons/fa";
function Projects() {
    return (
        <>
            <div id="projects"className="bg-white w-full min-h-screen py-[80px] px-[150px]">
                <div className="flex">
                    {/* Sidebar navigation */}
                    <div className="flex w-1/2   h-screen sticky top-0" >
                        <div className="flex flex-col  justify-center items-center w-full " >
                            <div className='bg-white h-[600px]'>
                                <p className='text-[#FFBD59] font-semibold tracking-wide text-[60px] w-full '>
                                    PORTFOLIO
                                </p>
                                <p>The sites on your right are the best bits which is built from scratch.</p>
                            
                                <img src={servIcon}width="450px" alt=""className='mt-3 ' />    
                                <p className='text-xl tracking-widest mb-2'>All the projects on your right are built from scratch in the following stack:</p>
                                <div className="flex justify-start items-center text-[#FFBD59] ">
                                     <FaCircle className="mr-2 text-[11px]"/> Html  <FaCircle className="m-2 text-[11px]"/>  Css  <FaCircle className="m-2 text-[11px]"/>  Javascript  <FaCircle className="m-2 text-[11px]"/>  Wordpress  <FaCircle className="m-2 text-[11px]"/>  PHP   <FaCircle className="m-2 text-[11px]"/>  Java.
                                </div>
                            </div>                        
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="w-1/2 ml-10 pt-[86px] mb-12">
                        
                        <div className="  mb-10 pb-5 " data-aos="fade-up">
                            <img src={examalter} alt="" width="600px"  className=' border rounded-2xl shadow-xl mx-auto'/>
                            <h1 id="examalter" className='mt-5 text-left text-4xl font-semibold text-[#FFBD59] mb-2'>EXAMALTER</h1>
                            <p className=' text-left text-base text-[#979393] '>A web application designed for teachers to shuffle questionnaires, ensuring unique question orders for each student. Developed to help minimize cheating by offering dynamic quiz generation.</p>
                        </div>

                        <div className="  mb-10 pb-5 " data-aos="fade-up">
                            <img src={shoescenter} alt="" width="600px"  className=' border rounded-2xl shadow-xl mx-auto'/>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>SHOES CENTER</h1>
                            <p className=' text-left text-base text-[#979393] '>An eCommerce website for a shoe store that allows customers to browse and select shoes. Payments are made through an alternative method where users upload a GCash receipt for manual verification, ensuring a secure and flexible transaction process without a full payment gateway integration.</p>
                        </div>

                        <div className="  mb-10 pb-5 " data-aos="fade-up">
                            <img src={philtrip} alt="" width="600px"  className=' border rounded-2xl shadow-xl mx-auto'/>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>PHILTRIP</h1>
                            <p className=' text-left text-base text-[#979393] '>A travel booking web application where users can explore destinations and book trips. Although no payment gateway is implemented, the system facilitates booking requests and manages user inquiries about travel packages.</p>
                        </div>

                        <div className="  mb-10 pb-5 " data-aos="fade-up">
                            <img src={pv1} alt="" width="600px"  className=' border rounded-2xl shadow-xl mx-auto'/>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>PORTFOLIO</h1>
                            <p className=' text-left text-base text-[#979393] '>A personal portfolio website created using WordPress, showcasing my projects, skills, and professional background. Designed to be visually appealing and user-friendly, reflecting my work as a web developer.</p>
                        </div>
                        <div className="  mb-10 pb-5 " data-aos="fade-up">
                            <img src={p6} alt="" width="600px"  className=' border rounded-2xl shadow-xl mx-auto'/>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>INSTRUCTOR MANAGEMENT SYSTEM</h1>
                            <p className=' text-left text-base text-[#979393] '>A Java-based desktop application for managing instructor information and schedules. Provides an intuitive interface for tracking instructor availability, assignments, and performance monitoring.</p>
                        </div>
                        <div className="  mb-10 pb-7 " data-aos="fade-up">
                            <img src={p7} alt="" width="600px"  className=' border rounded-2xl shadow-xl mx-auto'/>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>OFFICE SUPPLY MONITORING SYSTEM</h1>
                            <p className=' text-left text-base text-[#979393] '>A desktop-based inventory management system built with Java, focused on monitoring office supplies. Tracks inventory levels, usage, and supply restocking, making it easier for office administrators to manage resources efficiently.</p>
                        </div>
                        <div className="  mb-10 pb-5 " data-aos="fade-up">
                            <img src={p8} alt="" width="600px"  className=' border rounded-2xl shadow-xl mx-auto'/>
                            <h1 id="examalter" className='mt-5 text-left text-2xl font-semibold text-[#FFBD59]'>BUDGET MONITORING SYSTEM</h1>
                            <p className=' text-left text-base text-[#979393] '>A desktop application built with Java that helps users track and manage their budgets. It features data input, real-time monitoring of expenses, and visual representation of financial performance.

</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;