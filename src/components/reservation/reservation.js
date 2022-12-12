import React, { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { AiFillRightCircle } from 'react-icons/ai';
import { PostReservationsAPI } from '../../redux/reservations/Reservations';
import './reservation.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Reservation = () => {

  const userStore = useSelector((store) => store.user);
  const navigate = useNavigate

  useEffect(() => {
    if (userStore.length < 1) {
      navigate('/login');
    }
  }, [navigate, userStore]);
  const Reserve = (e) => {
      e.preventDefault();
      if (value.tour_id > 0 && userStore.length > 0) {
        dispatch(PostReservationsAPI(value, userStore[0].token));
        navigate('/tours/reservations');
      } else {
        // eslint-disable-next-line
        alert('Please select a tour');
      }
    

  }
    return (

  <div className="reservations-container">
    <div className="reservation-background" />
    <div className="overlay" />
    <div className="reservation-content">
      <h1 className="reservation-heading">Reserve a villa</h1>

      <form onSubmit={Reserve} className="reservation-form" action="">
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
          {Store.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
        </select>
      </form>

      <button className="reserve-button" type="submit">
        <FiSettings className="reserve-symbol-1" />
        Reserve
        <AiFillRightCircle className="reserve-symbol-2" />
      </button>
    </div>
  </div>);
  };

export default Reservation;