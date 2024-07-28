import React, { useState } from 'react';
import { Form, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './Membership.css';

const Membership = () => {
  const [category, setCategory] = useState('individual');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to your server or email
  };

  return (
    <div className="membership-form">
      <h2>Donate Food</h2>
      <ToggleButtonGroup
        type="radio"
        name="categories"
        value={category}
        onChange={(val) => setCategory(val)}
        className="mb-3"
      >
        <ToggleButton id="tbg-radio-1" value={'individual'}>
          Individual
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={'company'}>
          Company
        </ToggleButton>
      </ToggleButtonGroup>

      <Form onSubmit={handleSubmit}>
        {category === 'individual' && (
          <>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFood">
              <Form.Label>Type of Food</Form.Label>
              <Form.Control type="text" placeholder="Enter the type of food" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDistrict">
              <Form.Label>District</Form.Label>
              <Form.Control type="text" placeholder="Enter your district" required />
            </Form.Group>
          </>
        )}

        {category === 'company' && (
          <>
            <Form.Group className="mb-3" controlId="formCompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your company name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompanyAddress">
              <Form.Label>Company Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your company address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompanyFood">
              <Form.Label>Type of Food</Form.Label>
              <Form.Control type="text" placeholder="Enter the type of food" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompanyDistrict">
              <Form.Label>District</Form.Label>
              <Form.Control type="text" placeholder="Enter your district" required />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Membership;
