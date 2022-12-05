import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiFillRightCircle } from 'react-icons/ai';
import './reservation.css';

const Reservation = () => (
  <div className="reservations-container">
    <div className="reservation-background" />
    <div className="overlay" />
    <div className="reservation-content">
      <h1 className="reservation-heading">Reservations</h1>

      <form className="reservation-form" action="">
        <input
          type="date"
          aria-label="Date"
          name=""
          id="date"
          className="reservation-input"
          placeholder=""
          required
        />
        <input
          type="number"
          name=""
          id="persons_number"
          className="reservation-input"
          min="1"
          placeholder="Number of Persons"
          required
        />
        <select
          id="tour_id"
          className="reservation-input"
        >
          <option key="option">--Option--</option>
          {/* {Store.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))} */}
        </select>
      </form>

      <button className="reserve-button" type="submit">
        <FiSettings className="reserve-symbol-1" />
        Reserve
        <AiFillRightCircle className="reserve-symbol-2" />
      </button>
    </div>
  </div>
);

export default Reservation;
