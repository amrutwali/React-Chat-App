import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import styled from "styled-components";
import loader from "../Assets/loader.gif";
import "react-toastify/dist/ReactToastify.css";
import { setAvatarRoute } from "../Utils/API-Routes";

function SetAvatar() {
  const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <div>Set</div>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;

export default SetAvatar;
