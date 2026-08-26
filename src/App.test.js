import { render, screen, fireEvent } from '@testing-library/react';
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

const mockProps = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    dispatch: jest.fn(),
    submitForm: jest.fn()
};

test('Date input is required', () => {
    render(<BookingForm {...mockProps} />);

    const dateInput = screen.getByLabelText(/Date/i);

    expect (dateInput).toBeRequired();
});

test ('Time input is required', () => {
  render(<BookingForm {...mockProps} />);

  const timeInput = screen.getByLabelText(/Time/);

  expect(timeInput).toBeRequired();

})

test ('Guest input has correc validation attributes', ()=> {
    render (<BookingForm {...mockProps} />);

    const guestInput = screen.getByLabelText(/number of guests/i);

    expect(guestInput).toBeRequired();
    expect(guestInput).toHaveAttribute('min', '1');
    expect(guestInput).toHaveAttribute('max', '10');
});

test('Occasion input is required', () => {
    render (<BookingForm {...mockProps} />);

    const occasionInput = screen.getByLabelText(/occasion/i);

    expect(occasionInput).toBeRequired();
})

test('Submit button is disabled when form is invalid', () => {
   render (<BookingForm {...mockProps} />);

   const submitButton = screen.getByRole('button', {
    name: /make your reservation/i
   });
   expect(submitButton).toBeDisabled();
});

test ('Submit button is enabled when form is valid', () => {
   render (<BookingForm {...mockProps} />);

   const dateInput =screen.getByLabelText(/date/i);
   const timeInput =screen.getByLabelText(/time/i);
   const guestsInput =screen.getByLabelText(/number of guests/i);
   const occasionInput =screen.getByLabelText(/occasion/i);

   fireEvent.change (dateInput, {
    target: {value: '2026-08-25'}
   });

   fireEvent.change(timeInput, {
    target: {value: '19:00'}
   });

   fireEvent.change (guestsInput, {
    terget: {value: '4'}
   });

   fireEvent.change (occasionInput, {
    target: {value: 'Birthday'}
   });

   const submitButton = screen.getByRole('button', {
    name: /make your reservation/i
   });

   expect (submitButton).toBeEnabled();
});