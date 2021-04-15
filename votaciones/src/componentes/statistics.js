import React from 'react'

const Statistics = ({good,neutral,bad}) => { 

  return (
    <div>
      <h2>statistics</h2>
      good: {good} <br/>
      neutral: {neutral} <br/>
      bad: {bad} <br/>
      average: {(good+neutral+bad)/3} <br />
      positive: {(good/(good+neutral+bad)*100)}% <br />
    </div>
  )
}

export default Statistics;