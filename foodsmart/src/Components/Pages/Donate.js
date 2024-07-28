import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Donate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Donate = () => {
  const [step, setStep] = useState(1);
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    phone: '',
    address: '',
    email: '',
    paymentMode: 'Credit Card'
  });

  const handleNextStep = () => {
    if (step === 1 && (donationAmount || customAmount)) {
      setStep(2);
    } else if (step === 2) {
      sendEmail();
    }
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    const templateParams = {
      donationAmount: donationAmount || customAmount,
      firstName: formData.firstName,
      lastName: formData.lastName,
      idNumber: formData.idNumber,
      phone: formData.phone,
      address: formData.address,
      email: formData.email,
      paymentMode: formData.paymentMode
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Donation successful! Confirmation email sent.');
      })
      .catch(err => {
        console.error('Failed to send email:', err);
        alert('Failed to send confirmation email.');
      });
  };

  return (
    <div className="container mt-5">
      {step === 1 && (
        <div className="card p-4">
          <h2 className="mb-4">Choose a Donation Amount</h2>
          <div className="mb-3">
            {['500', '1000', '5000', '10000'].map(amount => (
              <button 
                key={amount} 
                className={`btn btn-outline-primary mr-2 ${donationAmount === amount && 'active'}`} 
                onClick={() => {
                  setDonationAmount(amount);
                  setCustomAmount('');
                }}>
                Rs {amount}
              </button>
            ))}
            <button 
              className={`btn btn-outline-primary ${donationAmount === '' && 'active'}`} 
              onClick={() => setDonationAmount('')}>
              Custom Amount
            </button>
            {donationAmount === '' && (
              <input
                type="number"
                className="form-control mt-3"
                placeholder="Enter your amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            )}
          </div>
          <button className="btn btn-primary" onClick={handleNextStep}>Next Step</button>
        </div>
      )}

      {step === 2 && (
        <div className="card p-4">
          <h2 className="mb-4">Payment Details</h2>
          <div className="form-group mb-3">
            <label>Payment Mode:</label>
            <select name="paymentMode" className="form-control" value={formData.paymentMode} onChange={handleInputChange}>
              <option value="Credit Card">Credit Card</option>
              <option value="Juice">Juice</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="idNumber"
              className="form-control"
              placeholder="ID Number"
              value={formData.idNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={handlePreviousStep}>Previous</button>
            <button className="btn btn-primary" onClick={handleNextStep}>Donate</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
