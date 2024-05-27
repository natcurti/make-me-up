import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import ButtonApp from "src/components/Button";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./styles.css";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { IFormLogin } from "src/types/IFormLogin";
import useLogin from "src/hooks/useLogin";
import ToastComponent from "src/components/Toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error } = useLogin();

  const iconProps = {
    className: "icon-eye",
    size: "25",
    onClick: () => setShowPassword(!showPassword),
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Você deve preencher o email")
      .email("Digite um email válido."),
    password: Yup.string()
      .required("Digite sua senha")
      .min(6, "Senha incorreta"),
  });

  const onSubmit = async (values: IFormLogin) => {
    login(values);
  };

  return (
    <>
      <ContainerForm
        title="Olá! Faça seu login ;)"
        subtitle="Entre com seu email e senha:"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form>
              <InputField
                name="email"
                id="floatingEmail"
                label="Email:"
                type="text"
                placeholder="Digite seu email"
              />
              <InputField
                name="password"
                id="floatingPassword"
                label="Senha:"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
              >
                {!showPassword && <IoMdEye {...iconProps} />}
                {showPassword && <IoMdEyeOff {...iconProps} />}
              </InputField>
              <div className="text-center mt-3">
                <ButtonApp
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  {loading ? (
                    <Spinner as="span" animation="border" size="sm" />
                  ) : (
                    "Entrar"
                  )}
                </ButtonApp>
                <p className="mb-0 mt-3">Não tem conta ainda ?</p>
                <Link to="/cadastro">Clique aqui e faça seu cadastro</Link>
              </div>
            </Form>
          )}
        </Formik>
      </ContainerForm>
      {error && <ToastComponent title="Erro" error={error.message} />}
    </>
  );
};

export default Login;
