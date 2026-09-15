import React from 'react'
import Contact from '../../images/contact.jpg'
import "./contact.css"

const contact = () => {
  return (
    <div>


<div className='title-div'>
                <h1 className='title-h1'>Contact Us</h1>
                <h3 className='title-h3'>Home/Contect    </h3>
                </div>

      <div className='overview-p'>
        <h1 className='overview-h1'>Meet us where recruitment strategy,<br/> hiring execution, and candidate<br/>conversations come together.
</h1>

    <img src={Contact} alt="" className='overview-p-img' />
      </div>
    
    <div className='callus'>
    
            <h1 className='font-bold p-2'>Call Us</h1>
            <h2 className='p-2'>+91 7838789590  or  0120 4225420</h2>
            <h1 className='font-bold p-2'>Email</h1>
            <h2 className='p-2'>info@job4sureconsultant.com</h2>
    </div>

            
            

          <div className='form'>
           
           
            <div className='form1'>

            <form >
              <h1 className='font-bold mt-4 mb-2'>Name</h1>
             <input className='name' type="text" placeholder='Enter Your Name' />
             <h1 className='font-bold mt-6 mb-2'>Email</h1>
             <input className='email' type="text" placeholder='Enter Your Email' />
             <h1 className='font-bold mt-6 mb-2'>Number</h1>
             <input className='number' type="text" placeholder='Enter Your Number' />
             <h1 className='font-bold mt-6 mb-2'>Meassge</h1>
             <input className='message' type="description" placeholder='Message' />
             
             <button className='message-btn'>Send A Message</button>
             



            </form>
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

export default contact

