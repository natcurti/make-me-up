import { Form, Formik } from "formik";
import InputField from "src/components/InputField";
import { IUser } from "src/types/IUser";
import { useAppSelector } from "src/types/hooks";
import "./styles.css";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import ButtonApp from "src/components/Button";
import useEditData from "src/hooks/useEditData";
import { Spinner } from "react-bootstrap";
import ToastComponent from "src/components/Toast";

const ClientData = () => {
  const user = useAppSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { editProfile, status, isLoading } = useEditData();

  const initialValues = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    cpf: user.cpf,
    cellphone: user.cellphone,
    password: user.password,
  };

  const onSubmit = (values: IUser) => {
    editProfile(values);
    setDisabled(true);
  };

  const iconProps = {
    className: "icon-eye",
    size: "25",
  };

  return (
    <div className="container-xxl mt-5 mx-auto d-flex flex-column align-items-center">
      <h3 className="mb-5">Meus Dados</h3>
      <main className="w-75 main">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form>
              <InputField
                name="name"
                id="floatingName"
                label="Nome:"
                type="text"
                placeholder="Digite seu nome"
                disabled={disabled}
              />
              <InputField
                name="lastname"
                id="floatingLastName"
                label="Sobrenome:"
                type="text"
                placeholder="Digite seu sobrenome"
                disabled={disabled}
              />
              <InputField
                name="email"
                id="floatingEmail"
                label="Email:"
                type="text"
                placeholder="Digite seu email"
                disabled={disabled}
              />
              <InputField
                name="cpf"
                id="floatingCPF"
                label="CPF:"
                type="text"
                placeholder="Digite seu CPF"
                disabled={disabled}
              />
              <InputField
                name="cellphone"
                id="floatingCell"
                label="Celular:"
                type="text"
                placeholder="Digite seu celular"
                disabled={disabled}
              />
              <InputField
                name="password"
                id="floatingPassword"
                label="Senha:"
                type={showPassword ? "text" : "password"}
                placeholder="Crie uma senha"
                disabled={disabled}
              >
                {!showPassword && (
                  <IoMdEye
                    {...iconProps}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
                {showPassword && (
                  <IoMdEyeOff
                    {...iconProps}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </InputField>
              <div className="d-flex gap-5">
                <ButtonApp type="button" onClick={() => setDisabled(false)}>
                  Editar
                </ButtonApp>
                <ButtonApp type="submit" disabled={!formik.isValid}>
                  {isLoading ? (
                    <Spinner as="span" animation="border" size="sm" />
                  ) : (
                    "Atualizar"
                  )}
                </ButtonApp>
              </div>
            </Form>
          )}
        </Formik>
      </main>
      {status && (
        <ToastComponent
          title={status.type}
          status={status.type}
          message={status.message}
        />
      )}
    </div>
  );
};

export default ClientData;
