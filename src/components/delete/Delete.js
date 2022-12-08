import React from 'react';
import './delete.css';

const Delete = () => {

  return (
    <div className="no-reservations">
      <p>
        You have no Tours under your Ownership. Please consider creating one!
      </p>
      <button
        type="button"
        className="reservation-link"
        onClick={() => navigate('/tours/create')}
      >
        Consider planing a Tour
      </button>
    </div>
  );
};

export default Delete;
