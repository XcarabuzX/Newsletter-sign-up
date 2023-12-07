import { Formik } from "formik";
import estilos from "./Form.module.css";
function Form() {
  return (
    <Formik
      initialValues={{ email: "" }}
        
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className={estilos.label}>
            Email address
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
              className={estilos.input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </label>
          <button className={estilos.boton}>
            Subscribe to monthly newsletter
          </button>
        </form>
      )}
    </Formik>
  );
}

export default Form;
