import React, { useEffect, useState } from "react";
import Announcement from "react-announcement";
import Logo from "../assets/image/logo.svg";
import { Alert } from "react-bootstrap";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";

function Sqlannounce() {
    const [announcements, setannouncements] = useState("");
    const [show, setShow] = useState(true);

    const sqlanm = () => {
        axios
          .post("http://localhost:3001/log", {
            announcements: announcements,
          })
          .then((response) => {
            console.log(response);
            setannouncements(response.data[0].announcements);
          });
      };

    
    return (
        <>
    <Container className="mt-5">
        <Alert show={show} variant="success">
            <Alert.Heading>Announcement!</Alert.Heading>
            <p>
            {announcements}
            </p>
            <hr />
        <div className="d-flex justify-content-end">
        <Button onClick={sqlanm} variant="outline-success">
          Refresh  
        </Button>
      </div>
      </Alert>
    </Container>
    </>
    );

};
export default Sqlannounce;