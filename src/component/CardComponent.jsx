// CardComponent.jsx
import React, { useState } from 'react';
import './CardComponent.css'; // We'll create this file next

const CardComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    partyName: '',
    materialQuantity: '',
    pricePerKg: '',
    date: new Date().toISOString().split('T')[0] // Sets current date as default
  });

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Card */}
      <div className="card" onClick={handleCardClick}>
        <img 
          src="https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
          alt="Card"
          className="card-image"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className='text-black text-center'>Material Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Party Name:</label>
                <input
                  type="text"
                  name="partyName"
                  value={formData.partyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Material Quantity:</label>
                <input
                  type="number"
                  name="materialQuantity"
                  value={formData.materialQuantity}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Price per Kg:</label>
                <input
                  type="number"
                  name="pricePerKg"
                  value={formData.pricePerKg}
                  onChange={handleInputChange}
                  step="0.01"
                  required
                />
              </div>

              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="button-group">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;