import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const [inputValue, setInputValue] = useState('');
    const { currency } = useContext(AppContext);
    const handleChange = event => {
      setInputValue(event.target.value);
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}
            <input type="Number" value={inputValue} onChange={handleChange} />
            </span>
        </div>
    );
};

export default Budget;
