import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { __getPostDetail } from "../../redux/modules/postSlice";

function PostModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const posts = post.data;
  const { id } = useParams();
  const star = posts?.star;

  const onClickUrlHandler = () => {
    window.open(post?.data.productUrl);
  };

  useEffect(() => {
    dispatch(__getPostDetail(id));
  }, [dispatch]);

  return (
    <ModalBack>
      <ModalBox>
        <ModalHeader>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>{posts?.productName}</div>{" "}
            <ModalLinkBtn onClick={onClickUrlHandler}>바로가기</ModalLinkBtn>
          </div>
          <div onClick={() => navigate("/")}>𝐗</div>
        </ModalHeader>
        <ModalNickStar>
          <p>{posts?.nickname}</p>
          <p>{"⭐️".repeat(star)}</p>
        </ModalNickStar>
        {/* TODO: 첨부 기능 구현시 ImgUrl로 변경  */}
        <ModalPhoto src={posts?.imageUrl} />
        <ModalText>{posts?.content}</ModalText>
        <ModalFooter>
          <div>
            <ModalBtn>수정</ModalBtn>
            <ModalBtn>삭제</ModalBtn>
          </div>
          {/* TODO: 기본-흰 하트, 좋아요 클릭-빨간 하트 */}
          <p style={{ fontSize: "1.5em", marginTop: "0px" }}>🤍❤️</p>
        </ModalFooter>
      </ModalBox>
    </ModalBack>
  );
}

export default PostModal;

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  z-index: 1;
  width: 500px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 40px 30px 40px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 5px 0px;
  padding-bottom: 13px;
  border-bottom: 1.5px solid #da3731;
  font-size: 1.4em;
  font-weight: bold;
  align-items: center;
`;

const ModalNickStar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
`;

const ModalPhoto = styled.img`
  width: 100%;
  height: 300px;
`;

const ModalLinkBtn = styled.button`
  width: 70px;
  height: 26px;
  border-radius: 5px;
  border: none;
  margin: 0px 0px 0px 10px;
  background-color: #da3731ea;
  color: white;
  font-weight: bolder;

  &:hover {
    background-color: #c61812;
    border: 2px solid #da3731;
    color: white;
  }
`;

const ModalText = styled.div`
  width: 99%;
  height: 220px;
  margin: 15px 0px 10px 0px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalBtn = styled.button`
  width: 85px;
  height: 32px;
  border-radius: 5px;
  border: none;
  margin: 0px 18px 0px 0px;
  background-color: #cccccc;
  color: white;
  font-weight: bolder;
  box-shadow: 5px 5px 5px #e7e7e7;

  &:hover {
    color: #da3731;
  }
`;
