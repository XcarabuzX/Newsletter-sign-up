import IconSuccessSvg from "../../assets/images/icon-success.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import estilos from './Succes.module.css';
function Succes() {
    const navegar = useNavigate();
    const location = useLocation();
    const email = new URLSearchParams(location.search).get("email");
  return (
    <div className={estilos.contenedor}>
      <IconSuccessSvg className="sm:w-12 sm:mt-2"/>
      <h1 className={estilos.titulo + " titulo"}>Thanks for subscribing!</h1>
      <p className={estilos.parrafo}>
        A confirmation email has been sent to <span className={estilos.bold}>{email}</span>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className={estilos.dissmis + " boton"} onClick={()=>navegar("/")}>  Dismiss message </button>
    </div>
  );
}

export default Succes;
