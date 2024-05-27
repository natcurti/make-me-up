import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import ButtonApp from "src/components/Button";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./styles.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { IFormLogin } from "src/types/IFormLogin";
import useLogin from "src/hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useLogin();

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
      .required("Você deve preencher o email.")
      .email("Digite um email válido."),
    password: Yup.string()
      .required("Digite sua senha")
      .min(6, "Senha incorreta"),
  });

  const onSubmit = async (values: IFormLogin) => {
    login(values);
  };

  return (
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
                Entrar
              </ButtonApp>
              <p className="mb-0 mt-3">Não tem conta ainda ?</p>
              <Link to="/cadastro">Clique aqui e faça seu cadastro</Link>
            </div>
          </Form>
        )}
      </Formik>
      {showModal && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Você ainda não tem uma conta!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Clique no botão abaixo e faça o seu cadastro</Modal.Body>
          <Modal.Footer>
            <ButtonApp onClick={() => navigate("/cadastro")}>
              Criar Cadastro
            </ButtonApp>
          </Modal.Footer>
        </Modal>
      )}
    </ContainerForm>
  );
};

export default Login;
