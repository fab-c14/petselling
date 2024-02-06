import React, { useState } from 'react';
import { Razorpay } from 'razorpay';

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'Credit Card',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Create a new instance of Razorpay
    const razorpay = new Razorpay({
      key_id: 'YOUR_RAZORPAY_KEY_ID',
      key_secret: 'YOUR_RAZORPAY_KEY_SECRET',
    });

    // Prepare the payment options
    const options = {
      amount: 50000, // Amount in paise (e.g., 50000 paise = ₹500)
      currency: 'INR',
      receipt: 'order_receipt',
      payment_capture: 1,
      notes: {
        name: formData.name,
        email: formData.email,
        address: formData.address,
      },
    };

    try {
      // Create a Razorpay order
      const order = await razorpay.orders.create(options);

      // Redirect to Razorpay checkout page
      razorpay.createPayment(order);
    } catch (error) {
      console.error('Error occurred while creating Razorpay order:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Order Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
