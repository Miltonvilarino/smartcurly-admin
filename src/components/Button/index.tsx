import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";
import ReactLoading from "react-loading";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: true | false;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type="bubbles" color="#fff" height="46px" width="46px" />
      </div>
    ) : (
      children
    )}
  </Container>
);

export default Button;
