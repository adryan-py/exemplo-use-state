import { useState } from "react";
import "./App.css"

function App(){
  const [contador, setContador] = useState(0);

  function renderizarMain() {
    
  }

  return (
    <>
      <input type="text"/>
      <br/>
      <input type="button" value="Clique" onClick={()=>{setContador(contador+1)}}/>
    </>
  )
}

export default App;