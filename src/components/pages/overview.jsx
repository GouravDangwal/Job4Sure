import React from 'react'
import OverviewPimg from '../../images/overview-p-img.jpg'
import "./overview.css"

const overview = () => {
  return (
    <div>
        

      <div className='title-div'>
                <h1 className='title-h1'>Overview</h1>
                <h3 className='title-h3'>Home/Overview</h3>
                </div> 
                <div className='.all-img'>

                    

                    {/* <div className='overview-div1'> */}

                    <h1 className='overview-h1'>Help Organizations To Match Talent to<br/> Opportunity
</h1>
                    {/* <div>

                    </div> */}

                    <div className='overview-p'>

                    <p className='overview-p1'>Founded in 2010 by Mr. Akhilesh Mishra, Job4sure consultancy have evolved into a renowned global recruitment consultant With a steadfast commitment to transforming careers and  businesses. Our journey began with a focus on local placements, and over the years, we've expanded our reach to encompass international markets, enabling us to connect talent andopportunities on a global scale. With an intricate understanding of various industries and a track record of successful placements, we've grown into a trusted partner for organizations seeking top-tier talent. Our team's expertise spans diverse sectors, allowing us to provide tailor-made solutions that align with the unique needs of our clients.<br/><br/></p>
                    <img className='overview-p-img' src={OverviewPimg} alt="" />
                    
                    </div>

                    <p className='overview-p2'>As we continue to expand our global footprint, our core values of integrity, collaboration, and<br/> innovation remain at the heart of everything we do. Join us on this exciting journey as we continue<br/> to bridge the gap between talent and opportunity, creating a world where potential thrives<br/> and success knows no bounds.
                    </p>


                    {/* </div> */}


                    </div>

                    <div className='overview-div2'>

                        
                    <div className='overview-box-div1'>
                        <h1 className='text-3xl font-semibold ml-7  mt-8'>Aligned Search</h1>
                        <p className='text-black mt-7'>We connect hiring activity to business need, not just role titles and resumes hiring activites.</p>
                    </div>
                    <div className='overview-box-div2'>
                        <h1 className='text-3xl font-semibold ml-7  mt-5'>Responsive Delivery</h1>
                        <p className='text-black mt-7'>Our process is designed to keep hiring decisions moving with clarity and pace.</p>
                    </div>
                    <div className='overview-box-div3'>
                        <h1 className='text-3xl font-semibold ml-7  mt-5'>Relationship Focus</h1>
                        <p className='text-black mt-7'>We build long-term trust with both clients and candidates throughout the journey.</p>
                    </div>
            
        </div>

                    
                            <h1 className='overview-owner-h1'>Building dependable hiring relationships with purpose</h1>

                        <div className='overview-owner'>


<p className='overview-owner-p'>“As the Managing Founder of Job4Sure Consultancy, I am proud to lead a team that stands for agility, trust, and<br/> performance. Since our inception, our mission has been clear: to redefine hiring by offering not just speed, but precision<br/> — matching the right talent with the right opportunity, often within just four hours. At Job4Sure, we believe great<br/> companies are built by great teams. Our work goes beyond staffing — we partner with our clients to solve talent <br/>challenges, drive growth, and fuel organizational success.</p>

    <img className='overview-owner-img' src="https://plus.unsplash.com/premium_photo-1661559063958-968c8f1928e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbiUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww" alt="" />


                        </div>


<p className='overview-owner-p2'>Whether you are a fast-scaling startup, a multinational enterprise, or a government body, we bring the insight, expertise,<br/> and commitment needed to deliver impact — every single time. We are a next-generation HR consultancy driven by<br/> results and client success. Whether you need senior leadership or high-volume staffing, we bring precision hiring, fast<br/> turnaround, and human insight backed by data. Our consultants bring domain expertise across verticals like IT,<br/> manufacturing, education, aviation, and government projects.</p>


                    


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
                    <h1 className='font-bold ml-10 mt-10 text-3xl text-blue-600'>
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

export default overview
