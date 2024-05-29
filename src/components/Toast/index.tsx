import { useState } from "react";
import { Toast } from "react-bootstrap";
import "./styles.css";

interface IToastComponent {
  title: string;
  status: string;
  message: string;
}

const ToastComponent = ({ title, status, message }: IToastComponent) => {
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
        <strong
          className={`me-auto ${
            status === "error" ? "text-danger" : "text-success"
          }`}
        >
          {title}
        </strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastComponent;
