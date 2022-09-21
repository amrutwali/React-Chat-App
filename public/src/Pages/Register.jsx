import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import styled from "styled-components";
import Logo from "../Assets/logo.svg";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../Utils/API-Routes";

function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("In Validation");
      const { password, username, email } = value;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      }
      navigate("/");
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = value;
    if (password !== confirmPassword) {
      toast.error("Password does not match", toastOptions);
      return false;
    } else if (username.length < 4) {
      toast.error("Username should be more than 4 charachters", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be 8 charachters or more", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email should not be blank", toastOptions);
    }
    return true;
  };

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="" />
            <h1>Chatty</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleOnChange(e)}
          />
          <button type="submit">Create Account</button>
          <span>
            Already have an account ? <Link to="/login">Login Here</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #010108;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      outline: none;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #fff !important;
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-transform: none;
        font-weight: bold;
        text-decoration: none;
        &:hover {
          color: #997af0;
        }
      }
    }
  }
`;

export default Register;
