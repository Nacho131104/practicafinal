import { useState } from "react"





const Contador = () =>{
    const [contador, setContador] = useState<number>(0)
  return (
    <div>
        <p> el contador esta en {contador}</p>
        <button onClick={()=>{setContador(contador+1)}}> Sumale 1</button>
    </div>
    )
}

export default Contador;