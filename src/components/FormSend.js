import React, { useState } from "react";
import { Row, Col, Button, Alert } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useForm } from "../hooks/useForm";

export const FormSend = ({ handleSendMessage }) => {
  const { values, handleInputChange, reset } = useForm({
    message: "",
  });

  const { message } = values;

  const [invalidForm, setInvalidForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim().length <= 1) {
      setInvalidForm(true);
    } else {
      handleSendMessage(message);
      reset();
      setInvalidForm(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={10} md={10} lg={10}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                onChange={handleInputChange}
                name="message"
                value={message}
                placeholder="Escribe tu mensaje"
                as="textarea"
                rows={2}
              />
            </Form.Group>
            {invalidForm && (
              <Alert variant="danger">El mensaje esta vacio</Alert>
            )}
          </Col>
          <Col sm={2} md={2} lg={2} style={{ paddingTop: "10px" }}>
            <Button type="submit" variant="success" size="lg" block>
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
