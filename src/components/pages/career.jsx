import React from 'react'
import InnerDiv1 from '../../images/indsutries-retail.jpg'
import Automotive from '../../images/automotive.jpg'
import Banking from '../../images/banking.jpg'
import Consumer from '../../images/consumer-durable.jpg'
import Engineering from '../../images/engineering.jpg'
import Fmcg from '../../images/fmcg.jpg'
import Infrastructure from '../../images/infrastructure.jpg'
import HealthCare from '../../images/health-care.jpg'
import It from '../../images/it-ites.jpg'
import Telecom from '../../images/telecom.jpg'
import "./career.css"

const career = () => {
  return (
    <div>
        
      <div className='title-div'>
                <h1 className='title-h1'>Career</h1>
                <h3 className='title-h3'>Home/Career</h3>
                </div> 

            <div className='career-div1'>

                <h1 className='career-div1-h1'>Search Job By Industry</h1>

                <div className='career-innerdiv'>
                    <p className='font bolder text-black text-2xl  pl-2 '>A process that involves everything from identifying, attracting, shortlisting, interviewing, selecting, hiring, screening & onboarding employees.</p>
                </div>

            </div>
                <div className='industries-outerdiv'>

                    <div className='industries-innerdiv'>
                       <img src={Consumer} alt=" from src " className='rounded w-full h-60' />

                       <h1 className='text-3xl font-bold  mt-10'>Consumer Durables</h1>


                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Telecom} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Manufacturing</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>
                    </div>
                    <div className='industries-innerdiv'>

                       <img src={Engineering} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Engineering</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>


                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Fmcg} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Fmcg</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>


                    </div>
                    <div className='industries-innerdiv'>

                       <img src={It} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Retail</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>


                    </div>
                    <div className='industries-innerdiv'>

                       <img src={Automotive} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Automotive</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>


                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Infrastructure} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Infrastructure</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>

                    </div>
                    <div className='industries-innerdiv'>

                       <img src={Telecom} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Telecom</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>

                    </div>
                    <div className='industries-innerdiv'>

                       <img src={HealthCare} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Health-Care</h1>
                        
                        
                        <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='message-btn'>Apply Jobs!</button>

                    {/* <div className='industries-innerdiv'>

                        <img src={Engineering} alt=""  className='rounded w-full h-60' />


                        <h1 className='text-3xl font-bold  mt-10  '>Engineering</h1>
                        
                        
                        <button className='font-semibold ml-1 mr-1 w-30 items-start mt-5 mb-5 text-black border-2'>Apply Jobs!</button>

                    </div> */}
                   </div> 




                   <div className='industries-allten-h1'>

                    <h1 className=' text-7xl text-blue-950 font-bold '>The Hiring Process</h1>
                </div>


                    <div className='career-div2'>

                        
                    <div className='career-box-div1'>
                        <h1 className='text-3xl font-semibold ml-7 text-blue-600 mt-8'>Identify Need</h1>
                        <p className='text-black font-bold mt-7'>This need could vary from filling a vacated position, better managing a team workload, or expanding..</p>
                    </div>
                    <div className='career-box-div2'>
                        <h1 className='text-3xl font-semibold ml-7 text-blue-600  mt-5'>Review Process</h1>
                        <p className='text-black font-bold mt-7'>HR department who review the applications and eliminate any candidate who does not meet the minimum requirements.</p>
                    </div>
                    <div className='career-box-div3'>
                        <h1 className='text-3xl font-semibold text-blue-600 ml-7  mt-5'>Interviews</h1>
                        <p className='text-black font-bold mt-7'>The organization and hiring committee, one or several interviews are scheduled for those remaining candidates.</p>
                    </div>
            
        </div>






                 
                    {/* <div className='about-outerhiring'>
                <div className='about-hiring'>
                    <h1 className='font-bold ml-10 mt-10 text-3xl text-blue-600'>
                    Incredible Recruitment & Staffing Agency
                    </h1>
                    <button onClick={()=>{
                        window.location.href="./contact"
                    }} className='about-hiringbtn'>Hiring Now </button>
                </div>
                
            </div> */}
                  
                  
                  
                  
                  





                    </div>
    </div>
    
  )
}

export default career
