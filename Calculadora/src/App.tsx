import calculadora from "./components/calculadora"
import "./App.css"


const App = ()=>{
  return (
   <div className="contenedor-centrado">
      {calculadora()}
   </div> 
  )
}

export default App
