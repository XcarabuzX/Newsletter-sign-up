import { useFormik } from "formik";
import * as Yup from "yup";
import estilos from "./Form.module.css";
function Form() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email required")
        .email("Valid email required"),
    }),
    onSubmit: (values) => {
      console.log(`usted envio: ${values}`);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email" className={estilos.label}>
        Email address
        {formik.touched.email && formik.errors.email ? (
          <p className={estilos.error}>{formik.errors.email}</p>
        ) : null}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        className={formik.touched.email && formik.errors.email ? estilos.inputError : estilos.input}
        value={formik.values.email}
        onChange={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
      />
      <button className={estilos.boton} onClick={() => formik.submitForm()}>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}

export default Form;
