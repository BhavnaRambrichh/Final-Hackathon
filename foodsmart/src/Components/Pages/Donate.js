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

    emailjs
      .send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Donation successful! Confirmation email sent.');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send confirmation email.');
      });
  };

  return (
    <div className="donate">
      <section className="hero-section hero-50 d-flex justify-content-center align-items-center" id="section_1">
        <div className="section-overlay"></div>
        <svg viewBox="0 0 1962 178" xmlns="http://www.w3.org/2000/svg">
          <path fill="#188933" d="M 0 114 C 118.5 114 118.5 167 237 167 L 237 167 L 237 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 236 167 C 373 167 373 128 510 128 L 510 128 L 510 0 L 236 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 509 128 C 607 128 607 153 705 153 L 705 153 L 705 0 L 509 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 704 153 C 812 153 812 113 920 113 L 920 113 L 920 0 L 704 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 919 113 C 1048.5 113 1048.5 148 1178 148 L 1178 148 L 1178 0 L 919 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 1177 148 C 1359.5 148 1359.5 129 1542 129 L 1542 129 L 1542 0 L 1177 0 Z" strokeWidth="0"></path>
          <path fill="#188833" d="M 1541 129 C 1751.5 129 1751.5 138 1962 138 L 1962 138 L 1962 0 L 1541 0 Z" strokeWidth="0"></path>
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1 className="text-white mb-4 pb-2">Make A Difference</h1>
              <a href="#section_3" className="btn custom-btn custom-border-btn">Donate your unsold food,easily</a>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1962 178" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path fill="#ffffff" d="M 0 114 C 118.5 114 118.5 167 237 167 L 237 167 L 237 0 L 0 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 236 167 C 373 167 373 128 510 128 L 510 128 L 510 0 L 236 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 509 128 C 607 128 607 153 705 153 L 705 153 L 705 0 L 509 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 704 153 C 812 153 812 113 920 113 L 920 113 L 920 0 L 704 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 919 113 C 1048.5 113 1048.5 148 1178 148 L 1178 148 L 1178 0 L 919 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 1177 148 C 1359.5 148 1359.5 129 1542 129 L 1542 129 L 1542 0 L 1177 0 Z" strokeWidth="0"></path>
          <path fill="#ffffff" d="M 1541 129 C 1751.5 129 1751.5 138 1962 138 L 1962 138 L 1962 0 L 1541 0 Z" strokeWidth="0"></path>
        </svg>
      </section>

      <div className="container mt-5">
        <div className="row">
          {/* Left Column for Membership Form */}
          <div className="col-lg-6 col-12">
            <h4 className="mb-4 pb-lg-2">Please join us!</h4>
            <form action="#" method="post" className="custom-form membership-form">
              <h4 className="text-black mb-4">Become a member</h4>

              <div className="form-floating mb-3">
                <input type="text" name="full-name" id="full-name" className="form-control" placeholder="Full Name" required />
                <label htmlFor="full-name">Full Name</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" name="message" placeholder="Describe message here" required></textarea>
                <label htmlFor="message">Describe message here</label>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          {/* Right Column for Donation Form */}
          <div className="col-lg-6 col-12">
            <h4 className="mb-4 pb-lg-2">Support Us!</h4>
            <div className="custom-form donation-form">
              {step === 1 && (
                <div>
                  <h4 className="text-black mb-4">Choose a Donation Amount</h4>
                  <div className="form-check">
                    {['100', '500', '1000', '5000'].map((amount) => (
                      <div className="form-check" key={amount}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="donationAmount"
                          id={`amount${amount}`}
                          value={amount}
                          checked={donationAmount === amount}
                          onChange={() => {
                            setDonationAmount(amount);
                            setCustomAmount('');
                          }}
                        />
                        <label className="form-check-label" htmlFor={`amount${amount}`}>
                          Rs{amount}
                        </label>
                      </div>
                    ))}
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="donationAmount"
                        id="customAmount"
                        value="custom"
                        checked={customAmount !== ''}
                        onChange={() => setCustomAmount('')}
                      />
                      <label className="form-check-label" htmlFor="customAmount">
                        Custom Amount
                      </label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount('');
                        }}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary mt-3" onClick={handleNextStep}>
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h4 className="text-black mb-4">Enter Personal Details</h4>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="idNumber"
                      className="form-control"
                      placeholder="ID Number"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="idNumber">ID Number</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="phone">Phone</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="address">Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <select
                      name="paymentMode"
                      className="form-select"
                      value={formData.paymentMode}
                      onChange={handleInputChange}
                    >
                      <option value="Credit Card">Credit Card</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                    <label htmlFor="paymentMode">Payment Mode</label>
                  </div>

                  <button className="btn btn-secondary" onClick={handlePreviousStep}>
                    Previous
                  </button>
                  <button className="btn btn-primary" onClick={handleNextStep}>
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
