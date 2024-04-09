import React from "react";
import Gasto from "./Gasto";

function ListadoGastos({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) {
  return (
    <div>
      <div className="listado-gastos contenedor">
        {filtro ? (
          <>
            <h2>{gastosFiltrados.lenght ? "Gastos" : "No hay gastos en esta categoría"}</h2>
            {gastosFiltrados.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.lenght ? "Gastos" : "No hay gastos aún"}</h2>
            {gastos.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default ListadoGastos;
