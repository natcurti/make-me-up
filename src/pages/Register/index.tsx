import { Form, Formik } from "formik";
import ContainerForm from "src/components/ContainerForm";
import InputField from "src/components/InputField";
import * as Yup from "yup";

interface IFormValues {
  name: string;
  sobrenome: string;
}

const Register = () => {
  const initialValues = {
    name: "",
    sobrenome: "",
  };

  const onSubmit = (values: IFormValues) => {
    console.log(values);
  };

  const schema = Yup.object({
    name: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Digite um nome válido"),
    sobrenome: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Digite um sobrenome válido"),
  });

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
        <Form>
          <InputField
            name="name"
            id="floatingName"
            label="Nome:"
            type="text"
            placeholder="Digite seu nome"
          />
          <InputField
            name="sobrenome"
            id="floatingLastName"
            label="Sobrenome:"
            type="text"
            placeholder="Digite seu sobrenome"
          />
        </Form>
      </Formik>
    </ContainerForm>
  );
};

export default Register;
