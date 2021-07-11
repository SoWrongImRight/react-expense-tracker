import React, { useState } from 'react';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  // const [enteredYear, setEnteredYear] = useState('');

  const yearChangeHandler = (event) => {
    // setEnteredYear(event.target.value);
    console.log('In ExpenseFilter Component ' + event.target.value);

    props.onSaveFilterYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div value="2021" className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
