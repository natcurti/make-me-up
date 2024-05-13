import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import ButtonApp from "src/components/Button";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import * as Yup from "yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import "./styles.css";
import { useAppDispatch, useAppSelector } from "src/types/hooks";
import { setIsShow } from "src/store/reducers/passwordShow";

interface IValuesForm {
  email: string;
  password: string;
}

const Login = () => {
  const isShow = useAppSelector((state) => state.passwordShow);
  const dispatch = useAppDispatch();

  const iconProps = {
    className: "icon-eye",
    size: "25",
    onClick: () => dispatch(setIsShow()),
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: IValuesForm) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Você deve preencher o email.")
      .email("Digite um email válido."),
    password: Yup.string()
      .required("Digite sua senha")
      .min(6, "Senha incorreta"),
  });

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
            type={isShow ? "text" : "password"}
            placeholder="Digite sua senha"
          >
            {!isShow && <IoMdEye {...iconProps} />}
            {isShow && <IoMdEyeOff {...iconProps} />}
          </InputField>
          <div className="text-center mt-3">
            <ButtonApp type="submit">Entrar</ButtonApp>
            <p className="mb-0 mt-3">Não tem conta ainda ?</p>
            <Link to="/cadastro">Clique aqui e faça seu cadastro</Link>
          </div>
        </Form>
      </Formik>
    </ContainerForm>
  );
};

export default Login;
