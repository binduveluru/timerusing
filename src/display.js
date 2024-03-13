import React from "react";

const Display = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <h1>SALES COUNTDOWN TIMER</h1>
      <h2>Offere ends in</h2>
      <table>
        <tbody>
          <tr>
            <th>{days}</th>
            <th>{hours}</th>
            <th>{minutes}</th>
            <th>{seconds}</th>
          </tr>
          <tr>
            <td>DAYS</td> 

            <td>HOURS</td>  

            <td>MINUTES</td> 

            <td>SECONDS</td> 
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Display;
