import React from "react";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../styles/chat.css";

export const CardMessage = ({ name, message, time, ownedByCurrentUser }) => {
  const date = new Date(time);
  const format = new Intl.DateTimeFormat("es").format(date);

  console.log(date.getSeconds());
  console.log(date.getSeconds() < "10");

  return (
    <>
      {ownedByCurrentUser ? (
        <>
          {/* send messages */}
          <Row className="text-left ">
            <Col sm={8} md={8} lg={8}>
              {name}
            </Col>
            <Col sm={8} md={8} lg={8}>
              <Card style={{ backgroundColor: "rgb(45 207 132)" }}>
                {message}
              </Card>
            </Col>
          </Row>
          <Row className="text-left">
            <Col sm={8} md={8} lg={8}>
              <span>{`${format} ${date.getHours()}:${date.getMinutes()}:${
                date.getSeconds() < 10
                  ? "0" + date.getSeconds()
                  : date.getSeconds()
              }`}</span>
            </Col>
          </Row>
        </>
      ) : (
        <>
          {/* received messages */}
          <Row className="text-end">
            <Col
              sm={{ span: 8, offset: 4 }}
              md={{ span: 8, offset: 4 }}
              lg={{ span: 8, offset: 4 }}
            >
              {name}
            </Col>
            <Col
              sm={{ span: 8, offset: 4 }}
              md={{ span: 8, offset: 4 }}
              lg={{ span: 8, offset: 4 }}
            >
              <Card
                style={{ backgroundColor: "#61aceb" }}
                className="card-received"
              >
                {message}
              </Card>
            </Col>
          </Row>
          <Row className="text-end">
            <Col
              sm={{ span: 8, offset: 4 }}
              md={{ span: 8, offset: 4 }}
              lg={{ span: 8, offset: 4 }}
            >
              <span>{`${format} ${date.getHours()}:${date.getMinutes()}:${
                date.getSeconds() < 10
                  ? "0" + date.getSeconds()
                  : date.getSeconds()
              }`}</span>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
