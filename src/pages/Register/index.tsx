import { Form, Formik } from "formik";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "src/types/hooks";
import { setIsShow } from "src/store/reducers/passwordShow";
import ButtonApp from "src/components/Button";
import { useNavigate } from "react-router-dom";
import { validateCPF, validatePhone } from "validations-br";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "src/firebaseConfig";

interface IFormValues {
  name: string;
  lastname: string;
  email: string;
  cpf: string;
  cellphone: string;
  password: string;
  passwordRepeat: string;
}

const Register = () => {
  const navigate = useNavigate();

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

  const onSubmit = async (values: IFormValues) => {
    await schema.validate(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        navigate("/");
        console.log("Cadastro criado");
      })
      .catch((error) => console.log(error));
  };

  const isShow = useAppSelector((state) => state.passwordShow);
  const dispatch = useAppDispatch();

  const iconProps = {
    className: "icon-eye",
    size: "25",
    onClick: () => dispatch(setIsShow()),
  };

  return (
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
              type={isShow ? "text" : "password"}
              placeholder="Crie uma senha"
            >
              {!isShow && <IoMdEye {...iconProps} />}
              {isShow && <IoMdEyeOff {...iconProps} />}
            </InputField>
            <InputField
              name="passwordRepeat"
              id="floatingPasswordRepeat"
              label="Confirme sua senha:"
              type={isShow ? "text" : "password"}
              placeholder="Confirme sua senha"
            >
              {!isShow && <IoMdEye {...iconProps} />}
              {isShow && <IoMdEyeOff {...iconProps} />}
            </InputField>
            <ButtonApp
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Criar Conta
            </ButtonApp>
          </Form>
        )}
      </Formik>
    </ContainerForm>
  );
};

export default Register;
