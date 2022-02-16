import React, { useEffect, useState } from 'react';
import {Alert} from "react-bootstrap";
import axios from 'axios';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from "../assets/image/logo.svg";
import uiImg from "../assets/image/logined.svg";
import './login.css';

const DeleteProfile = () => {
    const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");
    const[DeleteStatus,setDeleteStatus] = useState("");


    const deleted = () => {
        axios.post('http://localhost:3001/deleted',
        {
            username:usernameReg, 
            password:passwordReg,
        }).then((response) => {
            if(response.data.message){
                setDeleteStatus(response.data.message)
            } else{
                setDeleteStatus(response.data.message)
            }
            console.log(response);
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
                                onChange={(e)=>{setUsernameReg(e.target.value);}}
                                />
                            </Form.Group> 

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" 
                                onChange={(e)=>{setPasswordReg(e.target.value);}}
                                />
                            </Form.Group> 

                            <Button variant="primary btn-block" onClick={deleted}>DELETE</Button>

                            <div className="text-left mt-3">
                                <a href="/logincard"><small className="reset">Login</small></a> II
                                <a href="/updateprofile"><small className="reset ml-2">Update Profile</small></a> II 
                                <a href="/signup"><small className="reset"> Sign Up</small></a> 
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={uiImg} alt=""/>
                    </Col>
                </Row>
                <Alert variant="secondary">
                    <Alert.Heading>Account Status</Alert.Heading>
                    <hr />
                        <h4>
                        {DeleteStatus}
                    </h4>
                </Alert>
            </Container>
        </>
    );
};

export default DeleteProfile;