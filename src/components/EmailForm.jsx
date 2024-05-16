import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import emailjs from '@emailjs/browser';


function EmailForm() {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[message,setMessage] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()

        //EmailJS service id, templateid, public key
        const serviceId = 'service_ihjeobs';
        const templateId = 'template_wsed4pm';
        const publicKey = '06uTPHiUcyy204DG7';

        //create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'A R Nirmal',
            message: message,
        }

        //send the email using Emailjs
        emailjs.send(serviceId,templateId,templateParams,publicKey).them((response)=>{
            console.log("Email sent successfully!",response);
            alert("Message Sent")
            setName('');
            setEmail('');
            setMessage('');
        }).catch((error)=>{
            console.error("Error sending email:", error)
        })
    }

  return (
    <div>
        <div id='contact' className='container my-5'>
        <h1 className='text-center mb-4'>Contact</h1>
        <div><hr /></div>
            <div className='row'>
                <div className="col-lg-4">
                    <h3>Let's Connect</h3>
                </div>
                <div className='col-lg-6 border shadow p-1'>
                    <form onSubmit={handleSubmit} className='form'>
                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your Name" />
                    <br />
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Your E-Mail" />
                    <br />
                    <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                    <Form.Control  value={message} onChange={(e)=>setMessage(e.target.value)}
                    as="textarea"
                    placeholder="Your Message"
                    style={{ height: '100px' }}
                    />
                    </FloatingLabel>
                    <div className='d-flex justify-content-center mt-3'>
                        <button type='submit' className="btn btn-success w-25 ">Send E-Mail</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmailForm