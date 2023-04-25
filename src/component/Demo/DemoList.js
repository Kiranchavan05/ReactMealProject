import React, { useState,useMemo } from 'react';
import Button from '../UI/Button';

import classes from './DemoList.module.css';

const DemoList = (props) => {
    const [numbers, setNumbers] = useState([1, 3, 5, 9, 10]);
    const [isDescending, setIsDescending] = useState(true);
  
    const sortedNumbers = useMemo(() => {
      if (isDescending) {
        return [...numbers].sort((a, b) => b - a);
      } else {
        return [...numbers].sort((a, b) => a - b);
      }
    }, [numbers, isDescending]);
  
    function handleChangeOrder() {
      setIsDescending(!isDescending);
    }


  
    return (
      <div className={classes.list}>
        <h2>List</h2>
        <ul>
          {sortedNumbers.map((number) => (
            <li key={number}>{number}</li> ))}
            </ul>
            <Button onClick={handleChangeOrder}>
          {isDescending ? "Change to Ascending Order" : "Change to Descending Order"}
        </Button>
          </div>
        );
};

export default React.memo(DemoList);
