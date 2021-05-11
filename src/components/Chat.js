import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/chat.css";
import { CardMessage } from "../components/CardMessage";
import { FormSend } from "../components/FormSend";
import { useChat } from "../hooks/useChat";
import { ConfigurationName } from "../components/ConfigurationName";

export const Chat = () => {
  const { roomId } = "roomIdTest"; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [name, setName] = useState("");

  console.log(messages);

  const handleSendMessage = (message) => {
    sendMessage(message, name);
  };

  const handleSetName = (value) => {
    console.log(value);
    setName(value);
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col className="text-center" md={12} sm={12} lg={12}>
          <h4>Mi chat</h4>
        </Col>
      </Row>
      {name === "" && (
        <Row>
          <Col md={12} sm={12} lg={12}>
            <ConfigurationName handleSetName={handleSetName} />
          </Col>
        </Row>
      )}

      <hr />

      {name !== "" && (
        <Row className="d-flex justify-content-between row-messages">
          <div className="center-col">
            <Col sm={12} md={12} lg={12}>
              {messages.map((item, id) => {
                return <CardMessage {...item} key={id} />;
              })}
            </Col>
          </div>
          <Col className="text-left" sm={12} md={12} lg={12}>
            <FormSend handleSendMessage={handleSendMessage} />
          </Col>
        </Row>
      )}
    </>
  );
};
