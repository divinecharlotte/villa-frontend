import React from 'react';
import './CreateVilla.css';

const CreateVilla = () => (
  <div className="villa-content">
    <h1>CREATE A VILLA</h1>
    <form className="villaForm">
      <div className="form-column">
        <input
          type="text"
          placeholder="villa Title"
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
          <button className="add-villa-btn" type="submit" value="add-villa">
            Create Villa
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default CreateVilla;
