import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/chat.css";
import { CardMessage } from "../components/CardMessage";

export const Chat = () => {
  const messages = [
    {
      message: "hola",
      time: "00:01:00",
      type: "send",
    },
    {
      message: "Como estas?",
      time: "00:02:00",
      type: "received",
    },
  ];

  return (
    <>
      <Row className="justify-content-md-center">
        <Col className="text-center" md={12} sm={12} lg={12}>
          <h4>hola</h4>
        </Col>
      </Row>

      <hr />

      <Row className="d-flex justify-content-between row-messages">
        <Col sm={12} md={12} lg={12}>
          {messages.map((item, id) => {
            return <CardMessage {...item} key={id} />;
          })}
        </Col>
        <Col className="text-left" sm={12} md={12} lg={12}>
          <h1>Form</h1>
        </Col>
      </Row>
    </>
  );
};
