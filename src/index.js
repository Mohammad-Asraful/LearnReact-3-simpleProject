import React from "react";
import ReactDOM from "react-dom";
import './index.css'

let currentDate = new Date(2023, 2, 3, 14)
currentDate = currentDate.getHours()
let greeting = ''
const cssstyle = {};

if (currentDate >= 1 && currentDate < 12) {
  greeting = 'Good Morning'
  cssstyle.color = 'green'
} else if (currentDate >= 12 && currentDate < 19) {
  greeting = 'Good Afternoon'
  cssstyle.color = 'orange'
} else {
  greeting = 'Good Night'
  cssstyle.color = 'black'
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssstyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById('root')
)