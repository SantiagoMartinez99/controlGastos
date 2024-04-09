import { useState } from "react";
import Mensaje from "./Mensaje";

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    console.log("enviando formulario");
    if (!presupuesto || presupuesto < 0) {
      setMensaje("no es un numero valido");
      return;
    }
    setMensaje("");
    console.log("es un presupuesto valido");
    setIsValidPresupuesto(true)
  };

  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
          <div className="campo">
            <label>Definir presupuesto</label>
            <input
              className="nuevo-presupuesto"
              type="number"
              placeholder="Añade tu presupuesto"
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number(e.target.value))}
            ></input>
          </div>

          <input type="submit" value="Añadir" />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      </div>
    </>
  );
}

export default NuevoPresupuesto;
