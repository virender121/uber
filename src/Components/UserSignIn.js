import { Avatar } from "material-ui";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInImage from './Images/download.jpg';
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const styleText = {
    marginLeft: '100px',
    marginTop: '-50px',
    fontSize: '1.71429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '400'
};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
    let errorsCopy = { ...errors };
    errorsCopy.firstName = formData.firstName ? "" : "Please enter your first name";
    errorsCopy.lastName = formData.lastName ? "" : "Please enter your last name";
    errorsCopy.email = emailRegex.test(formData.email) ? "" : "Please enter a valid email address";
    errorsCopy.password = passwordRegex.test(formData.password) ? "" : "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number";
  
    setErrors(errorsCopy);
  
    // If there are no errors, submit the form and add the data to local storage
    if (!Object.values(errorsCopy).some((error) => error !== "")) {
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log(formData);
    
    navigate('/Login');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="signup-form ">
       <div style={{marginLeft:'0px', marginBottom: '40px'}}>
              <Avatar src={SignInImage} size='80px' />  
              <div style={styleText}>
                Ride With Uber
              </div>
              </div>
      <div className="form">
        {/* <label htmlFor="firstName"className="lable">First Name:</label> */}
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="input"/>
        <span>{errors.firstName}</span>
      </div>
      <div>
        {/* <label htmlFor="lastName"className="lable">Last Name:</label> */}
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="input"/>
        <span>{errors.lastName}</span>
      </div>
      <div>
        {/* <label htmlFor="email"className="lable">Email:</label> */}
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="input"/>
        <span>{errors.email}</span>
      </div>
      <div>
        {/* <label htmlFor="password" className="lable">Password:</label> */}
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="input"/>
        <span className="span">{errors.password}</span>
      </div>
      <button type="submit" className="button">Submit</button>
    </form>
  );
};

export default Signup;
