import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom'



describe('Booking form', () => {
    const availableTimes = ['17:00', '17:30'];
    const today = new Date().toISOString().split('T')[0];
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('Booking form', () => {
        const submitData = jest.fn();
        const options_times = [
            { value: '17:00', label: '17:00' },
            { value: '22:00', label: '22:00' },
        ]
        const { getByText } = render(<BookingForm  options_times={options_times}
                                                    submitData={submitData}/>);
        const linkElement = getByText('Choose time:');
        expect(linkElement).toBeInTheDocument();
        const linkElement1 = getByText('17:00');
        expect(linkElement1).toBeInTheDocument();
    });
    test('Booking1_form1', async () => {
        const submitData = jest.fn();
        const options_times = [
            { value: '17:00', label: '17:00' },
            { value: '22:00', label: '22:00' },
        ];
        const { getByAltText, getByText } =  await render(<BookingForm  options_times={options_times}
            submitForm={submitData}/>);
        const  submitButton =  getByText('Birthday');
        screen.debug();
        console.log("Sessfull lload code");
        const btn = screen.getByText('Submit');
        console.log("find subbmit");
        fireEvent.click(btn);


        // const linkElement = getByText('Choose time:');
        // expect(linkElement).toBeInTheDocument();
        // const linkElement1 = getByText('17:00');
        // expect(linkElement1).toBeInTheDocument();
    });
});
