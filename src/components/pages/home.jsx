import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Home from '../../images/home-first.jpg'
import GlobalImg from '../../images/global.img.jpg'
import FeatureImg1 from '../../images/home-feature-img1.jpg'
import FeatureImg2 from '../../images/home-feature-img2.jpg'
import FeatureImg3 from '../../images/home-feature-img3.jpg'
import Sony from '../../images/sony.png'
import Voltas from '../../images/voltas.svg'
import Vivo from '../../images/vivo.png'
import Parle from '../../images/parle.png'
import Hero from '../../images/hero-bg.jpg'
import "./home.css"





const home = () => {


    const myStyle = {

        backgroundImage:`url(${Hero})`,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        width: '100vw',
        Opacity: '0',
 };

  return (
    <div>
       
        <div className='.all-img'>

        
            {/* <img className='w-full flex absolute h-6/7 ' src="https://plus.unsplash.com/premium_photo-1661526579038-aea87aecd898?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHdvcmtpbmclMjBjb21wYW55fGVufDB8fDB8fHww" alt="" /> */}

         
              
          

        <div style={myStyle}  className='home'>

      

       
           

        <div className='home-h1-div'>

            
    <h1 className='home-h1'>We Don't Just Find Talent

        <br/>
We Build High-Performing Teams
    <br/>
   From Vacancy to Victory in Just 4 Hours</h1>
        </div>
    <div className='home-btn'>

    <button onClick={()=>{
        window.location.href="./contact"
        
    }}
    className='home-btn2'>GET IN TOUCH</button>
    <button onClick={()=>{
        window.location.href="./career"
    }} className='home-btn1'>Find A Job</button>
        </div>
    </div>
    
    
            

        <div className='flex flex-col justify-center items-center'>

       
        <h1 className='recentjobs'>Recent Jobs</h1>
        
        <p className='recentjobs-p'>Jobs couldn’t be loaded right now. Please try again later.</p>

        
        <button onClick={()=>{
            window.location.href="./career"
        }} className='recentjobsbtn'>View All Jobs</button>
        
         
        </div>

       
         <div className='home-global.div '>

    

        <button onClick={()=>{ window.location.href='./about'}} className='home-global-btn1'>ABOUT JOB4SURE</button>

            <h1 className='home-global-h1'>We are the leader in<br/> Global Recruitment <br/>Consultancy</h1>


            <div className='global-img'>
            <p className='home-global-p1'>We are a next-generation HR consultancy driven by results and client success,<br/> committed to delivering high-impact talent for growth-focused organizations.

<br/>
<br/>

Founded in 2010, we have empowered hundreds of companies with successful<br/> placements across IT, manufacturing, education, aviation, hospitality, and government<br/> projects.</p>
                    <img className='global-inner-img  ' src={GlobalImg} alt="from src" /></div>

        <p className='home-global-p2'>Our mission is simple: to be the bridge between ambition and achievement<br/> through precision hiring.</p>

        <ul className='home-ul'>
            <li >Understand client business and hiring context.</li>
            <li>Focus on core and near-core areas for better fit.</li>
            <li>Match skills required to meet business objectives.</li>
        </ul>

        <p className='home-global-p3'>Whether you need senior leadership or high-volume staffing, Job4Sure brings precision<br/>hiring, fast turnaround, and a strong service mindset to every engagement.</p>

        <button onClick={()=>{
            window.location.href="./about"
        }} className='home-global-btn2'>Explore About Us </button>
                
               
            

           




</div>

            <div className='about-div'>
                <div className='home-card-div1'>
                    <h1 className='text-2xl text-blue-800'>48</h1>
                    <h2 className='mt-3 text-lg'>Turn Around</h2>
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

                <h1 className='mt-50 ml-20 text-3xl underline text-amber-200 font-bold'>Feature Services</h1>


                   

                <div className='feature-outerdiv'>
                    
                    
                    
                    <div className='home-feature-div1'>

                    <img className='feature-img' src={FeatureImg1} width="350px" height="300px"  alt="" />

                        <h1 className='text-blue-300 underline  text-2xl  font-bold mt-3 ml-9'>Permanent Staffing</h1>
                        <p className='text-lg text-black mt-2 font-bold ml-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ipsa?</p>


                    </div>
                    

                    <div className='home-feature-div1'>

                        <img  className='feature-img' src={FeatureImg2}  width="350px" height="300px"alt="" />
                         <h1 className='text-blue-300  text-2xl mt-5 underline font-bold ml-13'>Temporary Staffing</h1>
                        <p className='text-lg text-black  font-bold mt-3 ml-9'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ipsa?</p>
                    </div>
                    

                    <div className='home-feature-div1'>

                        <img  className='feature-img' src={FeatureImg3} alt="" />
                         <h1 className='text-blue-300 text-2xl underline mt-5 font-bold ml-13'>HR Consulting</h1>
                        <p className='text-lg text-black   font-bold mt-3 ml-9'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, ipsa?</p>
                    </div>
                    

                    </div>


                
                        <h1 className='font-bold text-blue-500 mt-25 ml-15 text-3xl'>Trusting By Lending Oragnisations</h1>

                             <div className='home-oragnisations'>
                    <div className='track'>
                <div className='sony'>
                    <img src={Sony}  alt="" />
                    
                </div>
                <div className='voltas'>
                  
                   <img src={Voltas}  className='voltas-img'  alt="" />
                    
                </div>
                <div className='vivo'>
                     <img src={Vivo}  alt="" />
                    
                </div>
                <div className='parle'>
                     <img src={Parle} alt="" />
                    
                </div>

                    </div>





                    <div className='track2'>
                <div className='sony'>
                    <img src={Sony}  alt="" />
                    
                </div>
                <div className='voltas'>
                  
                   <img src={Voltas} className='voltas-img'  alt="" />
                    
                </div>
                <div className='vivo'>
                     <img src={Vivo}  alt="" />
                    
                </div>
                <div className='parle'>
                     <img src={Parle} alt="" />
                    
                </div>

                    </div>








                </div>
                    















                
        </div>
         </div>
         

        




          
    
  )
}

export default home
