import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from "../assets/image/logo.svg";
import uiImg from "../assets/image/logined.svg";
import './login.css';

const LoginPage = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const[LoginStatus,setLoginStatus] = useState("");

    const login = () => {
        axios.post('http://localhost:3001/login',
        {
            username:username, 
            password:password,
        }).then((response) => {

            if(response.data.message){
                setLoginStatus(response.data.message)
            } else{
                setLoginStatus(response.data[0].username)
            }
        })
    };

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon"/>
                        <Form>
                            <Form.Group >
                                <Form.Control type="username" placeholder="Enter username" 
                                onChange={(e)=>{setUsername(e.target.value);}}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" 
                                onChange={(e)=>{setPassword(e.target.value);}}
                                />
                            </Form.Group>

                            <Button variant="primary btn-block" onClick={login}>Login</Button>

                            <div className="text-left mt-3">
                                <a href="/signup"><small className="reset">Sign Up</small></a> II
                                <a href="#"><small className="reset ml-2">Quick Recover</small></a>
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
                </Row>
                <h1>{LoginStatus}</h1>
            </Container>
        </>
    );
};

export default LoginPage;