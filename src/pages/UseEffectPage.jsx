import { useEffect, useState } from "react";

export const UseEffectPage = () => {

  const [contador, setContador] = useState(0)

  useEffect(()=>{
    // Bloque de codigo
    console.log('Este curso es el mejor')
  },[]) // Array de dependencias vacío ---> solo se ejecuta cuando se renderiza el componente.

  useEffect(()=>{
    console.log('El contador ha cambiado de valor ' + contador)
  },[contador])

  return (
    <div className="text-center mt-5">
      <h1>Página useEffect Toni</h1>
      <button onClick={()=>setContador(prev => prev = + 1)}>Click!</button>
    </div>
  );
};
