import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "../hooks/useForm";

export const ConfigurationName = ({ handleSetName }) => {
  const { values, handleInputChange, reset } = useForm({
    name: "",
  });

  const { name } = values;
  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    handleSetName(name);

    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={10} md={10} lg={10}>
            <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                value={name}
                name="name"
                autoComplete="off"
                onChange={handleInputChange}
                type="text"
                placeholder="Mi nombre"
              />
            </Form.Group>
          </Col>

          <Col sm={2} md={2} lg={2} style={{ paddingTop: "25px" }}>
            <Button type="submit" variant="primary" size="lg" block>
              Guardar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
