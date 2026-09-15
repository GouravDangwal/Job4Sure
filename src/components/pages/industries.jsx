import React from 'react'
import IndustriesImg1 from '../../images/industriesimg1.jpg'
import InnerDiv1 from '../../images/indsutries-retail.jpg'
import IndustriesModel from '../../images/industries-model.jpg'
import Automotive from '../../images/automotive.jpg'
import Banking from '../../images/banking.jpg'
import Consumer from '../../images/consumer-durable.jpg'
import Engineering from '../../images/engineering.jpg'
import Fmcg from '../../images/fmcg.jpg'
import Infrastructure from '../../images/infrastructure.jpg'
import HealthCare from '../../images/health-care.jpg'
import It from '../../images/it-ites.jpg'
import Telecom from '../../images/telecom.jpg'
import "./industries.css"





const industries = () => {
    return (
        <div>
            
                <div className='title-div'>
                    <h1 className='title-h1'>INDUSTRIES</h1>
                    <h3 className='title-h3'>Home/Industries</h3>
                </div>



                <h3 className='h3'>Industries We Serve</h3>
                <h1 className='industries-h1'>Sector-aware hiring support built for speed,<br /> scale, and sharper business fit</h1>

                <div className='industries-img'>


                    <p className='p'>Job4Sure Consultant partners with organizations across retail, infrastructure, telecom, and IT & ITES, as<br /> well as healthcare, automotive, banking, FMCG, engineering, and consumer durable, bringing domain <br />  understanding to every mandate instead of a one-size-fits-all staffing model.</p>

                    <img className='industries-innerimg' src={IndustriesImg1} alt="From src" />
                </div>
                <br />
                <br />


                <p className='p'>The original website positioned these as core industries, and this page carries that structure forward<br />  with a more premium, modern presentation aligned to the rest of the redesign.
                </p>
                <br />
                <br />
                <br />
                <ul className='text-black'>
                    <li>Structured hiring support for domain-specific and business-critical positions.</li><br />
                    <li>A consultative approach that balances speed, quality, and long-term fit.</li><br />
                    <li>Scalable execution for both ongoing roles and fast ramp-up requirements.</li><br />
                </ul>



                <div className='about-div'>
                    <div className='div1'>
                        <h1 className='text-2xl justify-center items-center'>10</h1>
                        <h2 className='mt-3 text-lg'>Industry cards adapted from the legacy Industries page hiring mandates</h2>
                    </div>
                    <div className='div2'>
                        <h1 className='text-2xl justify-center items-center'>250+</h1>
                        <h2 className='mt-3 text-lg'>Client partnerships supported across hiring mandates industries page</h2>

                    </div>
                    <div className='div3'>
                        <h1 className='text-2xl justify-center items-center'>15+</h1>
                        <h2 className='mt-3 text-lg'>Years of recruitment and staffing evolution hiring mandates</h2>
                    </div>
                </div>


                <div className='industries-allten-h1'>

                    <h1 className=' industries-allten-innerh1 '>All ten industry areas from the old site, with each card now<br /> mapped to a dedicated image file in the industries asset folder<br /> just like the Clients page uses a dedicated clients folder.</h1>
                </div>




                <div className='industries-outerdiv'>

                    <div className='industries-innerdiv'>

                        <img src={InnerDiv1} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Retail</h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>Retail content marketing is a strategy where stores create and share valuable content to attract and engage customers.This can include blogs, social media.</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Infrastructure} alt=""  className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Infrastructure
                        </h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>Infrastructure is composed of public and private physical structures such as roads, railways, bridges, airports, public transit systems, tunnels, water supply</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Telecom} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Telecom</h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>The telecommunications industries within the sector of information and communication technology is made up of all telecommunications/telephone.</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={It} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>IT & ITES</h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>IT and ITES hiring calls for sharp screening, role clarity, and speed across technical delivery, support, consulting, and client-facing functions.</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={HealthCare} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Health Care</h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>Healthcare recruitment needs reliability, empathy, and precision across hospital operations, support teams, diagnostics, and care-linked functions.</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Automotive} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Automotive</h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>Automotive businesses often need scalable hiring across plants, quality functions, supply chains, dealer support, and production environments.

                        </p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Banking} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Banking</h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>Banking teams depend on careful hiring for customer-facing, operational, compliance, and business-support roles where trust and fit matter deeply.</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Fmcg} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>FMCG</h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>FMCG hiring moves fast, with continuous pressure across sales, distribution, marketing, operations, and market expansion mandates.</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Engineering} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Engineering
                        </h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>Engineering mandates require sharper role mapping across design, execution, technical services, project support, and specialist delivery functions.</p>
                    </div>
                    <div className='industries-innerdiv'>

                        <img src={Consumer} alt=" from src " className='rounded w-full h-60' />
                        <h1 className='text-3xl font-bold  mt-10'>Consumer Durable
                        </h1>

                        <p className='font-semibold ml-1 mr-1 items-start mt-5 mb-5 text-black'>Engineering mandates require sharper role mapping across design, execution, technical services, project support, and specialist delivery functions.</p>
                    </div>

                </div>


               
                    <h3 className='font-bold text-black ml-9 mt-39'>Why Is Matters</h3>
                    <h1 className='text-3xl text-blue-600 ml-9 mt-30'>Different industries hire differently. The delivery<br /> model should too.</h1>

                    <div className='industries-model'>
                    <p className='text-black font-bold ml-9 mt-25'>A retail hiring brief does not behave like an infrastructure mandate.<br /> A telecom rollout does not move like an ITES support ramp-up.<br /> Sector context changes timelines, candidate filters, stakeholder<br />expectations, and the cadence of execution.</p>

                        <img src={IndustriesModel} alt="" className='industries-model-innerimg' />
                    </div>
                        
                        <p className='t-0 text-black ml-9 font-bold '> That is where Job4Sure positions itself: not just as a recruiter, but<br /> as an execution partner that adapts hiring mechanics to the<br /> realities of the sector.
                        </p>
                


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

export default industries
