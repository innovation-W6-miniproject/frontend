import React from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { MainDiv, MainLeft, MainH1, MainP, MainBtn } from "./styles";

function Main() {
  const navigate = useNavigate();
  // token
  const token = useToken();

  const onNavigateReview = (token) => {
    if (token) {
      navigate(`/post/review`);
    } else {
      alert("로그인이 필요합니다!");
    }
  };

  const daisomall = "https://www.daisomall.co.kr/online/online_main.php";
  return (
    <MainDiv>
      <MainLeft>
        <MainH1>
          다이소 리뷰 사이트{" "}
          <span
            style={{ color: "#da3731", fontWeight: "800", marginLeft: "5px" }}
          >
            daisso
          </span>
        </MainH1>
        <MainP>리뷰 쓰고 다이소 꿀템을 공유해요</MainP>
        <MainBtn
          onClick={() => {
            window.open(daisomall);
          }}
        >
          다이소몰 가기
        </MainBtn>
        <MainBtn onClick={() => onNavigateReview(token)}>리뷰 작성하기</MainBtn>
      </MainLeft>
      <img src="../mainimage.png" alt="main" width="460" height="330" />
    </MainDiv>
  );
}

export default Main;
