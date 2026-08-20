import { useState } from "react";

function BookingForm ({availableTimes, dispatch, submitForm}){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("14:00");
    const [guests, setGuests] = useState("1");
    const [occasion, setOcassion] = useState("Birhday");


function handleSubmit (event) {
    event.preventDefault();
setDate("");
setTime("");
setOcassion("");
    console.log({
        date,
        time,
        guests,
        occasion
    });

    const formData = {
        date,
        time,
        guests,
        occasion
    };

    submitForm(formData);
}
return(
    <form
    onSubmit={handleSubmit}>
        
    <fieldset>
        <div>
          <label htmlFor="date">Date</label>
       <input
  type="date"
  id="res-date"
  value={date}
  onChange={(event) => {
    setDate(event.target.value);

    dispatch({
      type: "UPDATE_TIMES",
      date: event.target.value
    });
  }}
/>
        </div>

      <div>
        <label htmlFor="time">Time</label>

        <select id="time" value={time} onChange={(event) => setTime(event.target.value)}>
       {availableTimes.map((availableTime) => (
        <option key={availableTime} value={availableTime}>{availableTime}
        </option>
       ))}
</select>
        </div>


        <div>
        <label htmlFor="guests">Number of Guests</label>
        <input type="number" id="guests" min="1" max="10" value={guests} onChange={(event) => setGuests(event.target.value)}/>   
        </div>  

<div>
    <label htmlFor="occasion">occasion</label>
    <select id="occasion" value={occasion} onChange={(event) => setOcassion(event.target.value)}>
        <option value="Birthday">Birhday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Nospecial">No special occassion</option>
    </select>
</div>

<button type="submit">Make Your Reservation</button>

    </fieldset>
    </form>
);
}

export default BookingForm