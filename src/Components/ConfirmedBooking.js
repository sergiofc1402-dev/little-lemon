import { useLocation, useNavigate } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation();
    const navigate = useNavigate();

    const formData = location.state;



    return (
        <main class="confirmation-container">
           {/* <h1><i>Booking Confirmed!</i></h1>
            <p>Your table has been successfully reserved.</p> */}

            <div class="confirmation-card">
    <div class="icon-circle">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>

    <h1>Booking Confirmed!</h1>
    <p class="subtitle">Your table has been successfully reserved. We look forward to hosting you!</p>

    <div class="reservation-details">
      <div class="detail-item">
        <span class="label">Date: </span>
        <span class="value">{formData.date}</span>
      </div>
      <div class="detail-item">
        <span class="label">Time: </span>
        <span class="value">{formData.time}</span>
      </div>
      <div class="detail-item">
        <span class="label">Guests: </span>
        <span class="value">{formData.guests}</span>
      </div>
      <div class="detail-item">
        <span class="label">Occassion: </span>
        <span class="value">{formData.occasion}</span>
      </div>
    </div>

    <div class="action-buttons">
      <button class="btn-primary">Add to Calendar</button>
      <button class="btn-secondary" onClick={() => navigate("/")}>View Menu</button>
    </div>

    <p class="email-notice">A confirmation email has been sent to your inbox.</p>
  </div>
        </main>
    );
}

export default ConfirmedBooking;