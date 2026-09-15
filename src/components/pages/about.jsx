import React from 'react'
import "./about.css"
import About from '../../images/about.jpg'


const about = () => {


       
     
  return (
    <div>
        
        
            
       
        <div className='title-div'>
                <h1 className='title-h1'>ABOUT</h1>
                <h3 className='title-h3'>Home/About</h3>
                </div>
                <div className='all-img'>

                <div className='about-img'>

        
               
        
       

       

      <h3 className='h3'>Why Us</h3>

      <div className='about-heading'>

      <h1 className='about-h1'>Best employment services for businesses that need dependable hiring support</h1>
      {/* <h3 className='about-h3'>Job4Sure works with organizations that need more than resume flow. We bring structured search, business<br/> understanding, and practical delivery discipline to every hiring engagement.</h3> */}

    <img  className='global-inner-img' src={About} alt="" />

      <ul className='about-ul'>
        <li>Instantly reputable resource support with diverse skill sets.</li>
        <li>Robust network built through the Job4Sure database and market reach.</li>
        <li>
Availability of deputed resources from existing client ecosystems.</li>
        <li>Accessibility of assets for a considerable period of time when needed.</li>
        <li>
Inside IT group support for specialized approval and coordination.</li>
        <li>Technically skilled sourcing team for sharper hiring evaluation.</li>
        <li>Competitive rate cards according to ability, experience, and network strength.</li>
        <li>Global process awareness for smoother onboarding and legal interaction.</li>
      </ul>
      </div>
               </div>
        </div>
        
                

      <div className='about-div'>
                <div className='about-div1'>
                    <h1 className='text-2xl'>Speed with Relevance</h1>
                    <h2 className='mt-3 text-lg'>We move quickly, but we do not compromise on role fit, clarity, or candidate intent.</h2>
                </div>
                <div className='about-div2'>
                    <h1 className='text-2xl text-center'>Employer-Focused Support</h1>
                    <h2 className='mt-3 text-lg'>Every engagement is shaped around business needs, communication ease, and hiring confidence.</h2>
                    
                </div>
                <div className='about-div3'>
                     <h1 className='text-2xl'>Practical Market Access</h1>
                    <h2 className='mt-3 text-lg'>Our sourcing reach and screening discipline help clients access stronger, more workable talent pools.</h2>
                </div>
           
           </div> 

                    <div className='about-div'>
                <div className='home-card-div1'>
                    <h1 className='text-2xl text-blue-800'>48</h1>
                    <h2 className='mt-3 text-black text-lg'>Turn Around</h2>
                </div>
                <div className='home-card-div2'>
                    <h1 className='text-2xl text-blue-800'>2076</h1>
                    <h2 className='mt-3 text-lg'>Pre-Screened Candidates</h2>
                    
                </div>
                <div className='home-card-div3'>
                     <h1 className='text-2xl text-blue-800'>100</h1>
                    <h2 className='mt-3 text-lg'>Happy Clients</h2>
                </div>
                <div className='home-card-div4'>
                     <h1 className='text-2xl text-blue-800'>15</h1>
                    <h2 className='mt-3 text-lg'>Years Of Experience</h2>
                </div>
            </div>


            <div>
                <div className='about-agency'>
                        
                      
                        
                    <h3 className=' font-bold text-xl text-emerald-400'>More Than 250 Happy Clients</h3>
                    <h1 className='font-bold mt-8 text-blue-800 text-4xl'>Get In Touch With The Recruitment Staffing Agency!</h1>

                    <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='mt-8 mb-40 bg-blue-200 h-15 rounded-xl w-30'>Contact Us</button>
                </div>
            </div>


            <div className='about-outerhiring'>
                <div className='about-hiring'>
                    <h1>
                    Incredible Recruitment & Staffing Agency
                    </h1>
                    <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='about-hiringbtn'>Hiring Now </button>
                </div>
               
            </div>





           </div>
                
                 )
}

export default about
