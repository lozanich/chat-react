import React from "react";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../styles/chat.css";

export const CardMessage = ({ message, time, ownedByCurrentUser }) => {
  return (
    <>
      {ownedByCurrentUser ? (
        <>
          {/* send messages */}
          <Row className="text-left ">
            <Col sm={8} md={8} lg={8}>
              <Card style={{ backgroundColor: "rgb(45 207 132)" }}>
                {message}
              </Card>
            </Col>
          </Row>
          <Row className="text-left">
            <Col sm={8} md={8} lg={8}>
              <span>{time}</span>
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
              <span>{time}</span>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
