import { useState } from 'react';
import './Contact.css';
import location from '../../assets/icons/location.svg';
import phone_icon from '../../assets/icons/phone_icon.svg';
import email_icon from '../../assets/icons/email_icon.svg';

const Contact = () => {
  const [fullNameField, setFullNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [subjectField, setSubjectField] = useState("");
  const [messageField, setMessageField] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!isChecked) {
      alert("Please accept the terms and conditions to proceed.");
      return; 
    }
    
    console.log({
      fullName: fullNameField,
      email: emailField,
      phone: phoneField,
      subject: subjectField,
      message: messageField,
      acceptTerms: isChecked
    });

  
    setFullNameField("");
    setEmailField("");
    setPhoneField("");
    setSubjectField("");
    setMessageField("");
    setIsChecked(false);
  };

  return (
    <div className='contact'>
      <div className='contact-container'>
        <h1>CONTACT US</h1>

        <form onSubmit={handleSubmit}>
          <div className='fullname'>
            <label htmlFor="Fullname">Full Name</label><br />
            <input
              type="text"
              name="fullname"
              id="Fullname"
              placeholder='Enter your full name'
              value={fullNameField}
              onChange={(e) => setFullNameField(e.target.value)}
            />
          </div>

          <div className='email'>
            <label htmlFor="Email">Email</label><br />
            <input
              type="email"
              name="email"
              id="Email"
              placeholder='Enter your email address'
              value={emailField}
              onChange={(e) => setEmailField(e.target.value)}
            />
          </div>

          <div className='phone-number'>
            <label htmlFor="PhoneNumber">Phone Number <span>(optional)</span></label><br />
            <input
              type="text"
              name="phoneNumber"
              id="PhoneNumber"
              placeholder='Enter your phone number'
              value={phoneField}
              onChange={(e) => setPhoneField(e.target.value)}
            />
          </div>

          <div className='subject'>
            <label htmlFor="Subject">Subject</label><br />
            <input
              type="text"
              name="subject"
              id="Subject"
              placeholder='Enter the subject of your message'
              value={subjectField}
              onChange={(e) => setSubjectField(e.target.value)}
            />
          </div>

          <div className='message'>
            <label htmlFor="Message">Message</label><br />
            <textarea
              name="message"
              id="Message"
              placeholder='Type your message here...'
              value={messageField}
              onChange={(e) => setMessageField(e.target.value)}
            ></textarea>
          </div>

          <div className='accept-terms'>
            <input
              type="checkbox"
              name="acceptTerms"
              id="AcceptTerms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="AcceptTerms">I accept terms & conditions</label>
          </div>

          <div className='buttons'>
            <button type='submit'>Submit</button>
            <button type="reset" onClick={() => {
              setFullNameField("");
              setEmailField("");
              setPhoneField("");
              setSubjectField("");
              setMessageField("");
              setIsChecked(false);
            }}>Reset</button>
          </div>
        </form>
      </div>

      <div className="address-container">
        <h1>DROP IN OUR OFFICE</h1>

        <div>

        <div className='location'>
          <div className='location-title'>
            <img src={location} alt="location_icon" />
            <h3>Address</h3>
          </div>
          <div className='location-content'>1234 Elm Street, Suite 567, Springfield, IL 62704, USA</div>
        </div>

        <div className='phone-number'>
          <div className='phone-number-title'>
            <img src={phone_icon} alt="phone_icon" />
            <h3>Let&apos;s Talk</h3>
          </div>
          <div className='phone-number-content'>+1 555 123 4567</div>
        </div>

        <div className='email-address'>
          <div className='email-address-title'>
            <img src={email_icon} alt="email_icon" />
            <h3>General Support</h3>
          </div>
          <div className='email-address-content'>contact@example.com</div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
