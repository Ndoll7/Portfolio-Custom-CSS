import React from 'react'
import { GrMailOption } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import '../app/styles/contact.css';


const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid md:grid-cols-2'>
            <div className='contact-space'>
                <h1 className='contact-heading' data-aos="zoom-in-up">Get in Touch</h1>
                <p className='contact-text' data-aos="zoom-in-up">
                    Drop me a line, give me a call,or send me a message,by submitting the form...
                </p>
                <div className='contact-flex' data-aos="zoom-in-up">
                <GrMailOption  size={30}/> ndoll7@gmail.com
                </div>
                <div className='contact-flex' data-aos="zoom-in-up">
                <LuPhoneCall size={30} /> 000000001
            </div>
                </div>
                <div className='contact-space'>
                        <div className='form' data-aos="zoom-in-up">
                            <label htmlFor='name'>Name</label>
                            <input  type='text' id='name' className='input-field'></input>
                        </div>
                        <div className='form' data-aos="zoom-in-up">
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='input-field' id='email'/>
                        </div>
                        <div className='form' data-aos="zoom-in-up">
                            <label htmlFor='msg'>Message</label>
                            <textarea className='textarea-field ' rows={8} id='msg'></textarea>
                        </div>
                        <button className='button' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
