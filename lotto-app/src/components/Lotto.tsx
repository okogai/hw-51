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

export default Lotto;