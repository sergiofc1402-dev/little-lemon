
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Bookingpage from "./Bookingpage";

import { initializeTimes, updateTimes } from "./BookingUtils";
import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";


function Main () {

const navigate = useNavigate();
function submitForm(formData){
    const success = submitAPI(formData);
    if (success) {
        navigate("/booking-confirmed", {
            state: formData
        });
    }
}
    const [availableTimes, dispatch] = useReducer (
        updateTimes, [], initializeTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/bookings" element={<Bookingpage  availableTimes= {availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="booking-confirmed" element= {<ConfirmedBooking />}/>
            </Routes>

            
            
        </main>
            );
}

export default Main;