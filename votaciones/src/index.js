import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './componentes/statistics';

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
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <br></br>
      {VerEstadisticas}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)