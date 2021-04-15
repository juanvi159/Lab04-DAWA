import React from 'react'
import Statistic from './statistic';

const Statistics = (props) => { 

  return (
    <div>
      <h2>statistics</h2>
      <Statistic text="Good" value={props.good}/>
      <Statistic text="Neutral" value={props.neutral}/>
      <Statistic text="Bad" value={props.bad}/>
      <div>all: {(props.good+props.neutral+props.bad)}</div>
      <div>average: {(props.good+props.neutral+props.bad)/3}</div>
      <div>positive: {(props.good/(props.good+props.neutral+props.bad)*100)}%</div>
    </div>
  )
}

export default Statistics;