import IconSuccessSvg from "../../assets/images/icon-success.svg?react";
import { useLocation } from "react-router-dom";
import estilos from './Succes.module.css';
function Succes() {
    const location = useLocation();
    const email = new URLSearchParams(location.search).get("email");
  return (
    <div className={estilos.contenedor}>
      <IconSuccessSvg />
      <h1 className={estilos.titulo + " titulo"}>Thanks for subscribing!</h1>
      <p className={estilos.parrafo}>
        A confirmation email has been sent to <span className={estilos.bold}>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className={estilos.dissmis + " boton"}>  Dismiss message </button>
    </div>
  );
}

export default Succes;
