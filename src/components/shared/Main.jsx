import estilos from "./Main.module.css";
import IconListSVG from "../../assets/images/icon-list.svg?react";
function Main({ children }) {
  return (
    <main className={estilos.main}>
      <h1 className={estilos.titulo}>Stay Updated!</h1>
      <p className={estilos.parrafo}>
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul>
        <li className={estilos.item}>
          <IconListSVG className={estilos.icono}/>
          Product discovery and building what matters
        </li>
        <li className={estilos.item}>
          <IconListSVG className={estilos.icono}/>
          Measuring to ensure updates are a success
        </li>
        <li className={estilos.item}>
          <IconListSVG className={estilos.icono}/>
          And much more!
        </li>
      </ul>
      <div>
        {children}
      </div>
    </main>
  );
}

export default Main;
