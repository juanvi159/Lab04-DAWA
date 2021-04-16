import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [selected, setSelected] = useState(anecdotas[Math.floor(Math.random() * anecdotas.length)])
  const [votos, setVotos] = useState(0)

  function cambiarAnecdota() {
    const anecdota = anecdotas[Math.floor(Math.random() * anecdotas.length)];
    setSelected(anecdota);
    setVotos(anecdota.votos);
  }
  var anectArray = []
  for(var cont=0;cont<=5;cont++) {
    anectArray.push(anecdotas[cont].votos)
  };
  const masVotos= anecdotas[anectArray.indexOf(Math.max(...anectArray))]

  return (
    <Fragment>
    <div style={{  color: "black", backgroundColor: "#E9A7FF"}}> 
      <h2>La Anecdota del Dia</h2>
      <h4>{selected.anectoda}</h4>
      <h3>Tiene: {votos} Votos</h3>
      <button onClick={()=>{selected.votos++;setVotos(selected.votos)}}>Votar</button>
      <button onClick={cambiarAnecdota} >Siguiente Anecdota</button>
    </div>
    <div style={{  color: "black", backgroundColor: "#E186FF",}}>
      <h2>Anecdota con mas Votos</h2>
      <h4>{masVotos.anectoda}</h4>
      <h3>Tiene: {masVotos.votos} Votos</h3>
    </div>
    </Fragment>
  )
}

const anecdotas = [
  {anectoda:'La tripulacion miraba con Horror como una bestia me tragaba, Y no hizo nada',votos:0,},
  {anectoda:'El verdadero sonido de mi espada, solo puede oirse cuando dominan la reencarnacion',votos:0,},
  {anectoda:'El fin justifica la violencia de los medios',votos:0,},
  {anectoda:'Me gusta programar, pero casi siempre me olvido de documentar mi codigo XD',votos:0,},
  {anectoda:'Hacer algo, es mejor, que no hacer nada',votos:0,},
  {anectoda:'No importa cuanto tiempo tengas, sino, como lo usas',votos:0,}
]

ReactDOM.render(
  <App anecdotas={anecdotas} />,
  document.getElementById('root')
)
