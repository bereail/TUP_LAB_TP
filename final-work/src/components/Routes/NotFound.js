import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigation = useNavigate();

  const goBackHandler = () => {
    navigation("/");
  };

  return (
    <div className="d-flex  flex-column justify-content-center align-items-center">
      <h2>La pagina no esta disponible</h2>
      <Button className="w-25" onClick={goBackHandler}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default NotFound;