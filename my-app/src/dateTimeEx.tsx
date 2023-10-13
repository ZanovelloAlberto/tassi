import React, { useState } from 'react';
import { listaTassoIntaresse, state } from './model';
interface TableProps {
  lti: state<listaTassoIntaresse>
}

const DateTimeList: React.FC<TableProps> = ({ lti }) => {
  const [list, setList] = lti;
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [numericInput, setNumericInput] = useState<number | ''>(''); // Using a union type to allow empty string

  return (
    <div>
      lista variazione tasso
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter a number"
        value={numericInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          // Ensure the input value is a valid number or an empty string
          const value = e.target.value;
          if (value === '' || !isNaN(Number(value))) {
            setNumericInput(value === '' ? '' : Number(value));
          }
        }}
      />
      <button onClick={() => {
        if (selectedDate && numericInput) {
          setList([...list, { data: new Date(selectedDate), nuovoTasso: numericInput }].sort((a, b) => a.data.getTime() - b.data.getTime()));
          setSelectedDate('');
          setNumericInput(0);
        }
      }}>Add to List</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            Date: {item.data.toString()}, Text: {item.nuovoTasso}
            <button onClick={() => {
              const newList = [...list];
              newList.splice(index, 1);
              setList(newList);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateTimeList;