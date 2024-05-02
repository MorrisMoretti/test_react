import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import styled from "styled-components";


function BookingForm() {

const [sdate, setDate] = useState(new Date());
const [timeees, setTimmes] = useState("");
const [ocassion, setOcassion] = useState("");
const ocasionList = [
    { value: "Birthday", label: "Birthday" },
    { value: "Anniversary", label: "Anniversary" },
  ];

const options_times = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
    { value: '22:00', label: '22:00' },
  ]
  const handleChangeOcas = e => {
    setOcassion(e.target.value);
  }
const onChange_times = (event) => {
    const value = event.target.value;
    setTimmes(value);
  };
const handleDateChange = (date) => {
    setDate(date)
  };
const handleReset = () => {
    setNumGuest("4");
    // Reset all state variables here
    setDate(new Date());
};

const Styles = styled.form`
  display: grid; max-width: 200px; gap: 20px
  `
const [numGuest, setNumGuest] = useState(0);
const setNumberGuest = ({ target }) => {
      let { value, min, max } = target;
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
      setNumGuest(value);
    };

const handleSubmit = (e) => {
    console.log(
        "ocassion",
        ocassion,
        "num Guest",
        numGuest,
        "Times is",
        timeees,
        "___",
        sdate,
    );
    e.preventDefault();
};

return (
    <fieldset>
        <Styles>
            <form action='#' method='get' onSubmit={handleSubmit} >
                <label>
                        <label htmlFor = "res-date">
                            Choose Date:
                                <DatePicker selected={sdate}
                                            onChange={handleDateChange} />
                        </label>
                        <label htmlFor="res-time">
                            Choose time:
                                <select onChange={onChange_times}
                                        className="form-select"
                                        value={timeees}>
                                        {options_times.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                        </label>
                        <label htmlFor="guests">
                            <br></br>
                            Number of guests:
                                <input type="number"
                                    onChange={setNumberGuest}
                                    value={numGuest} min="0" max="10" />
                        </label>

                        <label htmlFor="occasion">Occasion
                        <br></br>
                            {ocasionList.map((x, i) => <label key={i}>
                                <input
                                type="radio"
                                name="gender"
                                value={x.value}
                                onChange={handleChangeOcas}
                                /> {x.label}
                            </label>)}
                            <div>Selected value: {ocassion}</div>
                        </label>

                </label>
                        <button
                            type="reset"
                            value="reset"
                            onClick={() => handleReset()}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            value="Submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Submit
                        </button>
            </form>
            </Styles>
    </fieldset>
    )
}

export default BookingForm;

