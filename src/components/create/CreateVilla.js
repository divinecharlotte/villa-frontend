import React from 'react';
import './CreateVilla.css';

const CreateTour = () => {


  return (
    <div className="tour-content">
      <h1>CREATE A VILLA</h1>
      <form className="TourForm">
        <div className="form-column">
          <input
            type="text"
            placeholder="Tour Title"
            required
          />
          <input
            type="number"
            placeholder="Duration (weeks)"
            min="1" 
            required
          />
          <textarea
            placeholder="Description"
            required
          />
        </div>
        <div className="column-rigth">
          <div>
            <input
              type="text"
              placeholder="City"
              required
            />
            <input
              type="number"
              placeholder="Cost"
              required
            />
            <input
              type="url"
              placeholder="Photo URL"
              required
            />
          </div>
          <div>
            <button className="add-tour-btn" type="submit" value="add-tour">
              Create Tour
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTour;
