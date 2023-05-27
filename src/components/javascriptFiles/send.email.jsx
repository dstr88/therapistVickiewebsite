import React, { useState } from 'react';
import nodemailer from 'nodemailer';

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isMinor, setIsMinor] = useState(true);
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transporter = nodemailer.createTransport({
      host: 'smtp.fastmail.com',
      port: 587,
      secure: true,
      auth: {
        user: 'vickie@fastmail.com',
        pass: 'jug4dx3mzr6zsm2k'
      }
    });

    const mailOptions = {
      from: 'donnie@titaniumhut.com',
      to: 'vickie.starkey@protonmail.com',
      subject: 'New Enrollment Form Submission',
      html: `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Is Minor: ${isMinor ? 'Yes' : 'No'}</p>
        ${isMinor ? `
          <p>Parent Name: ${parentName}</p>
          <p>Parent Phone: ${parentPhone}</p>
          <p>Parent Email: ${parentEmail}</p>
        ` : ''}
        <p>Note: ${note}</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      alert('Thank you for your submission. We will be in touch shortly.');
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setIsMinor(true);
      setParentName('');
      setParentPhone('');
      setParentEmail('');
      setNote('');
    } catch (error) {
      console.error(error);
      alert('An error occurred while trying to submit the form.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Are you a minor?</label>
          <label htmlFor="minor-yes">
            <input type="radio" id="minor-yes" name="minor" checked={isMinor} onChange={() => setIsMinor(true)} />
            Yes<span className="required">*</span>
          </label>
          <label htmlFor="minor-no">
            <input type="radio" id="minor-no" name="minor" checked={!isMinor} onChange={() => setIsMinor(false)} />
            No
          </label>
        </div>
        {isMinor && (
          <>
            <div className="form-group">
              <label htmlFor="parent-name">Parent Name<span className="required">*</span></label>
              <input type="text" id="parent-name" value={parentName} onChange={(e) => setParentName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="parent-phone">Parent Phone<span className="required">*</span></label>
              <input type="tel" id="parent-phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="parent-email">Parent Email<span className="required">*</span></label>
              <input type="email" id="parent-email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} required />
            </div>
          </>
        )}
        <div className="form-group">
          <div className="note-group">
            <label htmlFor="note">Note (500 characters limit)</label>
            <textarea id="note" maxLength="500" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            <span className="note-limit">{note.length}/500</span>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
