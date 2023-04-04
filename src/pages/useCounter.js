/* eslint-disable */
import React, { useEffect, useState } from 'react';

const useCounter = (val) => {
    const [count, setCount] = useState(val);
    let [sec, min, hrs] = ['00', '00', '00'];

    useEffect(() => {
        setTimeout(() => {
            setCount((prestate) => {
                const myArray = prestate.split(":");
                [sec, min, hrs] = [parseInt(myArray[2]), parseInt(myArray[1]), parseInt(myArray[0])];
                sec = sec + 1;
                sec = (sec < 10) ? `0${sec}` : sec;

                if (sec > 9) {
                    min = min + 1;
                    sec = '00';
                }
                if (min > 9) {
                    hrs = hrs + 1;
                    min = '00';
                }
                min = (min < 10) ? `0${min}` : min;
                hrs = (hrs < 10) ? `0${hrs}` : hrs;
                const calculateNewValue = `${hrs}:${min}:${sec}`;
                return calculateNewValue;
            })
        }, 1000);
    }, [count]);

    return count;
}
export default useCounter;