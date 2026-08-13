import { useState } from "react";

function BookingForm (){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("14:00");
    const [guests, setGuests] = useState("1");
    const [occasion, setOcassion] = useState("Birhday");

    const [availableTimes] = useState([
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ])

function handleSubmit (event) {
    event.preventDefault();
setDate("");
setTime("");
setGuests("");
setOcassion("");
    console.log({
        date,
        time,
        guests,
        occasion
    });
}
return(
    <form
    onSubmit={handleSubmit}>
        
    <fieldset>
        <div>
          <label htmlFor="date">Date</label>
        <input type= "date" id="date" value={date} onChange={(event) => setDate(event.target.value)}/> 
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