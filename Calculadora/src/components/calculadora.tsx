import "../App.css";

const Calculadora = () => {
  const digitos = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0", "="];
  const operadores = ["+", "-", "*", "/"];

  return (
      <div className="calculadora-base">
        
        <div className="pantalla-simple">0</div>

        <div className="seccion-controles">

          <div className="bloque-numeros">
            {digitos.map((d) => (
              <div key={d}>
                <button> {d}</button>
              </div>
            ))}
          </div>

          <div className="bloque-operadores">
            {operadores.map((op) => (
              <div key={op}>
                <button>{op}</button>
              </div>
            ))}
          </div>
        </div>

      </div>
  );
};

export default Calculadora;