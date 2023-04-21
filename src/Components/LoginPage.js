import React, { useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./UserSignIn.css";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import SignInImage from './Images/download.jpg';
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';

const stylePaper = {
    height: '330px',
    width: '400px',
    background: '#f8f8f9',
    position: 'relative',
    marginLeft:'35%',
    marginTop: '70px'
};

const styleText = {
    marginLeft: '100px',
    marginTop: '-50px',
    fontSize: '1.71429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '400'
};

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("formData")); // retrieve stored data
    if (!storedData) { // if data is not present in local storage
      alert("ERROR: User does not exist!");
    } else if (storedData.email !== email) { // if email does not match
      alert("ERROR: Invalid Email!");
    } else if (storedData.password !== password) { // if password does not match
      alert("ERROR: Invalid Password!");
    } else { // if all fields match with stored data
      alert('Login Successful! Redirecting to Home Page...');
      navigate('/bookACab'); // navigate to home page
    }
  };
  

  return (
    <Paper style={stylePaper}>
      <Form onSubmit={handleSubmit} className="signin-form">
        <div style={{marginLeft:'0px', marginBottom: '40px'}}>
            <Avatar src={SignInImage} size='80px' />  
            <div style={styleText}>
              Ride With Uber
            </div>
        </div>
        <Form.Item>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="signin-form-button">
            LOGIN
          </Button>
          Or <a href="/UserSignUp">Sign Up</a>
        </Form.Item>
      </Form>
    </Paper>
  );
};

export default Signin;
