import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './componentes/statistics';
import Buttons from './componentes/buttons';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  var VerEstadisticas = <div>No feedback given</div>;

  if(good>=1||neutral>=1||bad>=1){
    VerEstadisticas = <Statistics good={good} neutral={neutral} bad={bad}/>;
  }

  return (
    <div>
      <h2>give feedback</h2>
      <br></br>
      <Buttons value={good} setValue={setGood} name={"Good"}/>
      <Buttons value={neutral} setValue={setNeutral} name={"Neutral"}/>
      <Buttons value={bad} setValue={setBad} name={"Bad"}/>
      <br></br>
      {VerEstadisticas}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)