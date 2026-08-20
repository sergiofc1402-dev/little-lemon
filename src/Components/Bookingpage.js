import BookingForm from "./BookingForm";

function Bookingpage ({availableTimes, dispatch, submitForm}){
    return(
        <main>
            <h1>Reserve a table</h1>
            <p>Booking a table</p>
        
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        
        </main>
    )
}

export default Bookingpage;