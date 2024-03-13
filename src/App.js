import React, { useEffect, useState } from 'react';
import Display from './display';

const App = () => {
  const endTime = new Date('febraury 29, 2024 00:00:00').getTime(); // get time is a inbuilt fuction to the time 
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().getTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const gap = currentTime - endTime;
  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 900;

  const remainingDays = Math.floor(gap / days); // in build function in java script for mathamatical operatins to use
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    if (gap <= 0) {
      alert('Offer Ended');
    }
  }, [gap]); // value of differencre between current time and end time 

  return (
    <div>
      <center>  {/* we use to display form data */}
        <Display
          days={remainingDays}
          hours={remainingHours}
          minutes={remainingMinutes}
          seconds={remainingSeconds}
        />
      </center>
    </div>
  );
};

export default App;