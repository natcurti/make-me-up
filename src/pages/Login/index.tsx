import { FloatingLabel, Form } from "react-bootstrap";
import "./styles.css";
import ButtonApp from "src/components/Button";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Login = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowPassword = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="bg-page d-flex justify-content-center align-items-center">
      <main className="container-form shadow-sm p-5 rounded-4">
        <h1 className="fs-3">Olá! Faça seu login ;)</h1>
        <p className="fs-5">Entre com seu email e senha:</p>
        <form>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="Digite seu email aqui" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Senha"
            className="mb-3 input-password"
          >
            {!isShow && (
              <IoMdEye
                className="icon-eye"
                size="25"
                onClick={handleShowPassword}
              />
            )}
            {isShow && (
              <IoMdEyeOff
                className="icon-eye"
                size="25"
                onClick={handleShowPassword}
              />
            )}
            <Form.Control
              type={isShow ? "text" : "password"}
              placeholder="Digite sua senha aqui"
            />
          </FloatingLabel>
          <div className="text-center mt-3">
            <ButtonApp>Entrar</ButtonApp>
            <p className="mb-0 mt-3">Não tem conta ainda ?</p>
            <Link to="/cadastro">Clique aqui e faça seu cadastro</Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
