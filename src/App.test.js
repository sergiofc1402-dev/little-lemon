import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './Components/BookingUtils';

test('Renders the BookingForm button', () => {
    render( <BookingForm
            availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00"]}
            dispatch={() => {}}
        />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
});

test ('initializeTimes returns the correct available times', () => {
  const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns the same state', () => {
    const state = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00"
    ];

    const action = {
        type: "UPDATE_TIMES",
        date: "2026-08-20"
    };

    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});