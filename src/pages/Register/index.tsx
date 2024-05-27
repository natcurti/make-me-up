import { Form, Formik } from "formik";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import * as Yup from "yup";
import ButtonApp from "src/components/Button";
import { validateCPF, validatePhone } from "validations-br";
import { useState } from "react";
import { IUser } from "src/types/IUser";
import useSignUpWithEmailAndPassword from "src/hooks/useSignUpWithEmailAndPassword";
import ToastComponent from "src/components/Toast";
import { Spinner } from "react-bootstrap";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const { signUp, loading, error } = useSignUpWithEmailAndPassword();

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    cpf: "",
    cellphone: "",
    password: "",
    passwordRepeat: "",
  };

  const schema = Yup.object({
    name: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Digite um nome válido"),
    lastname: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Digite um sobrenome válido"),
    email: Yup.string()
      .required("Campo obrigatório")
      .email("Digite um email válido"),
    cpf: Yup.string()
      .required("Campo obrigatório")
      .test("is-cpf", "Digite um CPF válido", (value) => validateCPF(value)),
    cellphone: Yup.string()
      .required("Campo obrigatório")
      .test("is-cellphone", "Digite um número válido", (value) =>
        validatePhone(value)
      ),
    password: Yup.string()
      .required("Campo obrigatório")
      .min(6, "Deve conter no mínimo 6 caracteres"),
    passwordRepeat: Yup.string()
      .required("Campo obrigatório")
      .oneOf([Yup.ref("password"), ""], "As senhas digitadas não correspondem"),
  });

  const onSubmit = (values: IUser) => {
    signUp(values);
  };

  const iconProps = {
    className: "icon-eye",
    size: "25",
  };

  return (
    <>
      <ContainerForm
        title="Estamos felizes em ter você por aqui!"
        subtitle="Complete seu cadastro:"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          {(formik) => (
            <Form>
              <InputField
                name="name"
                id="floatingName"
                label="Nome:"
                type="text"
                placeholder="Digite seu nome"
              />
              <InputField
                name="lastname"
                id="floatingLastName"
                label="Sobrenome:"
                type="text"
                placeholder="Digite seu sobrenome"
              />
              <InputField
                name="email"
                id="floatingEmail"
                label="Email:"
                type="text"
                placeholder="Digite seu email"
              />
              <InputField
                name="cpf"
                id="floatingCPF"
                label="CPF:"
                type="text"
                placeholder="Digite seu CPF"
              />
              <InputField
                name="cellphone"
                id="floatingCell"
                label="Celular:"
                type="text"
                placeholder="Digite seu celular"
              />
              <InputField
                name="password"
                id="floatingPassword"
                label="Senha:"
                type={showPassword ? "text" : "password"}
                placeholder="Crie uma senha"
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
              <InputField
                name="passwordRepeat"
                id="floatingPasswordRepeat"
                label="Confirme sua senha:"
                type={showPasswordRepeat ? "text" : "password"}
                placeholder="Confirme sua senha"
              >
                {!showPasswordRepeat && (
                  <IoMdEye
                    {...iconProps}
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  />
                )}
                {showPasswordRepeat && (
                  <IoMdEyeOff
                    {...iconProps}
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  />
                )}
              </InputField>
              <ButtonApp
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                {loading ? (
                  <Spinner as="span" animation="border" size="sm" />
                ) : (
                  "Criar Conta"
                )}
              </ButtonApp>
            </Form>
          )}
        </Formik>
      </ContainerForm>
      {error && <ToastComponent title="Erro" error={error.message} />}
    </>
  );
};

export default Register;
