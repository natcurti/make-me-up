import { ErrorMessage, Field } from "formik";
import { FloatingLabel, Form } from "react-bootstrap";

interface IInputField {
  name: string;
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

interface IFieldProps {
  field: {
    name: string;
    value: string;
    onChange: () => void;
    onBlur: () => void;
  };
}

const InputField = ({ name, id, label, type, placeholder }: IInputField) => {
  return (
    <>
      <Field name={name}>
        {({ field }: IFieldProps) => {
          return (
            <FloatingLabel controlId={id} label={label} className="mb-3">
              <Form.Control type={type} {...field} placeholder={placeholder} />
            </FloatingLabel>
          );
        }}
      </Field>
      <ErrorMessage name={name}>
        {(message) => <p className="text-danger">{message}</p>}
      </ErrorMessage>
    </>
  );
};

export default InputField;
