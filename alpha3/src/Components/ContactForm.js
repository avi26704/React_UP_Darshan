import "./ContactStyle.css"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_mjkc2mq';
      const templateId = 'template_4uajmig';
      const publicKey = 'r7qW1OrYvw-ylgGTI';

      const templateParams = {
        name: name,
        email: email,
        phone:phone,
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Email sent successfully!', response);
          setName('');
          setEmail('');
          setMessage('');
          setPhone('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
    return(
        <div className="form-container">
            <h1>Send a Message to Us!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)}/>
                <input type="text" id="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" id="phone" placeholder="Phone" value={phone}
        onChange={(e) => setPhone(e.target.value)}/>
                <textarea name="" placeholder="Message" id="" cols="30" rows="4" value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}
export default ContactForm