import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLi, LogoutButton } from "./styles";
import { removeCookie } from "../../utils/Cookie";
import useToken from "../../hooks/useToken";
import { useDispatch } from "react-redux";

function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useToken();

  const onLogout = () => {
    removeCookie("access_token");
  };

  return (
    <HeaderLi>
      <li onClick={() => navigate("/mypage")}>마이페이지</li>
      <li onClick={() => onLogout()}>로그아웃</li>
    </HeaderLi>
  );
}

export default Dropdown;
