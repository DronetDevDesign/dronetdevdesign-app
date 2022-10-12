import './FormStyles.css';
import React from 'react';

const Form = () => {
  return (
    <div className='form'>
      <form action="https://formsubmit.co/ron@dronetdevdesign.com" method="POST">
        <input type="hidden" name="_captcha" value="false"></input>
        <label>Your Name</label>
        <input type='text' name="name" required></input>
        <label>Email</label>
        <input type='email' name="email" required></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
       <textarea rows='10' placeholder='Type your message here'></textarea>
        <button type="submit" className='contact-btn'>Submit</button>
      </form>
      <div className='thank-you'>
        <h3>Thank you for taking the time to visit my website.</h3>
        <p>I will contact you as soon as possible. Have a great day!</p>
      </div>
    </div>
  )
}

export default Form