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
    fontFamily: "Arial",
    border:'1px solid black'
  };
  return (
<div>
  <h1>SBFL Record Book</h1>
<table style={mystyle}>
  <tr style={mystyle}>
    <th style={mystyle}>Year</th>
    <th style={mystyle}>Champion</th>
    <th style={mystyle}>Runner-Up</th>
    <th style={mystyle}>Third Place</th>
    <th style={mystyle}>#1 Seed</th>
    <th style={mystyle}>#2 Seed</th>
    <th style={mystyle}>Sticker Bitch</th>
    <th style={mystyle}>Survivor</th>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2015</td>
    <td style={mystyle}>Casey Conwell</td>
    <td style={mystyle}>Frank Avenoso, Jr</td>
    <td style={mystyle}>Matt Turowski</td>
    <td style={mystyle}>Frank Avenoso, Jr</td>
    <td style={mystyle}>Casey Conwell</td>
    <td style={mystyle}>Drew Schuerholz</td>
    <td style={mystyle}>Casey Conwell</td>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2016</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}>Chris Kiernan</td>
    <td style={mystyle}>John Snow</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}>Chris Kiernan</td>
    <td style={mystyle}>Dan Noonan</td>
    <td style={mystyle}>Anthony Cafiero</td>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2017</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2018</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2019</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2020</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2021</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
  </tr>
  <tr>
    <td style={{fontWeight:'bold'}}>2022</td>
    <td style={mystyle}>Anthony Cafiero</td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
    <td style={mystyle}></td>
  </tr>
</table>
</div>
  );
};

export default RecordBook;
