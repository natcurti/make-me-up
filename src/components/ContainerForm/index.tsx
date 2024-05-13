import React from "react";
import "./styles.css";

interface IContainerForm {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const ContainerForm = ({ children, title, subtitle }: IContainerForm) => {
  return (
    <div className="bg-page d-flex justify-content-center align-items-center">
      <main className="container-form shadow-sm p-5 rounded-4 my-5">
        <h1 className="fs-3">{title}</h1>
        <p className="fs-5">{subtitle}</p>
        {children}
      </main>
    </div>
  );
};

export default ContainerForm;
