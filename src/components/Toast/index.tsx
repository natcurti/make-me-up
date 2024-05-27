import { useState } from "react";
import { Toast } from "react-bootstrap";
import "./styles.css";

interface IToastComponent {
  title: string;
  error: string;
}

const ToastComponent = ({ title, error }: IToastComponent) => {
  const [showToast, setShowToast] = useState(true);

  return (
    <Toast
      show={showToast}
      onClose={() => setShowToast(!showToast)}
      autohide
      delay={5000}
      className="container-toast"
    >
      <Toast.Header>
        <strong className="me-auto text-danger">{title}</strong>
      </Toast.Header>
      <Toast.Body>{error}</Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
