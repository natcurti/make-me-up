import { FloatingLabel, Form } from "react-bootstrap";
import "./styles.css";
import ButtonApp from "src/components/Button";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IValuesForm {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Você deve preencher o email.")
    .email("Digite um email válido."),
  password: Yup.string().required("Digite sua senha").min(6, "Senha incorreta"),
});

const Login = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowPassword = () => {
    setIsShow(!isShow);
  };

  const iconProps = {
    className: "icon-eye",
    size: "25",
    onClick: handleShowPassword,
  };

  const submitForm = (values: IValuesForm) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitForm,
    validationSchema,
  });

  return (
    <div className="bg-page d-flex justify-content-center align-items-center">
      <main className="container-form shadow-sm p-5 rounded-4">
        <h1 className="fs-3">Olá! Faça seu login ;)</h1>
        <p className="fs-5">Entre com seu email e senha:</p>
        <Form onSubmit={formik.handleSubmit}>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Digite seu email aqui"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FloatingLabel>
          {formik.touched.email && formik.errors.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-3 input-password"
          >
            {!isShow && <IoMdEye {...iconProps} />}
            {isShow && <IoMdEyeOff {...iconProps} />}
            <Form.Control
              type={isShow ? "text" : "password"}
              placeholder="Digite sua senha aqui"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </FloatingLabel>
          {formik.touched.password && formik.errors.password && (
            <p className="text-danger">{formik.errors.password}</p>
          )}
          <div className="text-center mt-3">
            <ButtonApp type="submit">Entrar</ButtonApp>
            <p className="mb-0 mt-3">Não tem conta ainda ?</p>
            <Link to="/cadastro">Clique aqui e faça seu cadastro</Link>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default Login;
