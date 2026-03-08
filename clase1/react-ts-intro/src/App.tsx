
import "./App.css";
//import Saludo from "./components/hello";
//import { Counter } from "./components/count";
import { useState } from "react";



const MiFuncioncitaPresumida = () => {


  //const name = "Paqui";


  const [contador, setContador] = useState<number>(0)
  return (
    <div>
        <p> el contador esta en {contador}</p>
        <button onClick={()=>{setContador(contador+1)}}> Sumale 1</button>
    </div>
    )
}

export default MiFuncioncitaPresumida;
