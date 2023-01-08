import React from 'react';
import ReactDOM from 'react-dom/client';


const RecordBook = (props) => {
  //const images = props.images.map((image) => {
  //return <img

  //});
  const mystyle = {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
<div>
<table style={mystyle}>
  <tr>
    <th>Year</th>
    <th>Champion</th>
    <th>Runner-Up</th>
    <th>Third Place</th>
    <th>#1 Seed</th>
    <th>#2 Seed</th>
    <th>Sticker Bitch</th>
    <th>Survivor</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
</div>
  );
};

export default RecordBook;
