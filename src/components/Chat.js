import React from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/chat.css";
import { CardMessage } from "../components/CardMessage";
import { FormSend } from "../components/FormSend";
import { useChat } from "../hooks/useChat";

export const Chat = () => {
  const { roomId } = "roomIdTest"; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging

  console.log(messages);

  const handleSendMessage = (message) => {
    sendMessage(message);
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col className="text-center" md={12} sm={12} lg={12}>
          <h4>Mi chat</h4>
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
          <FormSend handleSendMessage={handleSendMessage} />
        </Col>
      </Row>
    </>
  );
};
