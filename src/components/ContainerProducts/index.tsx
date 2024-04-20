import React from "react";
import { Row } from "react-bootstrap";

interface IContainerProducts {
  children: React.ReactNode;
}

const ContainerProducts = ({ children }: IContainerProducts) => {
  return (
    <Row
      className="justify-content-center mx-auto mt-5 gap-4"
      style={{ width: "80%" }}
    >
      {children}
    </Row>
  );
};

export default ContainerProducts;
