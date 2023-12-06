import estilos from './Form.module.css';
function Form() {
    return ( 
        <form action="">
            <label htmlFor="email" className={estilos.label}>Email address
                <input type="email" name="email" id="email" placeholder="email@company.com" className={estilos.input}/>
            </label>
            <button className={estilos.boton}>Subscribe to monthly newsletter</button>
        </form>
     );
}

export default Form;