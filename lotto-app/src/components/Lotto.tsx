import React, { useState } from 'react';
import Ball from './Ball';
import './Lotto.css';

const getRandomNumbers = (): number[] => {
    const numbers: number[] = [];

    while (numbers.length < 5) {
        const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.sort((a, b) => a - b);
};

const Lotto: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const refreshNumbers = () => {
        setNumbers(getRandomNumbers());
    };

    return (
        <div>
            <div className='numbers-container'>
                {numbers.map((number) => (
                    <Ball key={number} number={number} />
                ))}
            </div>
            <button type='button' onClick={refreshNumbers} className='refresh-btn'>
                New numbers
            </button>
        </div>
    );
};

export default Lotto;