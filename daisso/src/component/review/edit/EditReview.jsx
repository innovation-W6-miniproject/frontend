import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Layout from "../../layout/Layout";
import ReviewHeader from "../header/Header";
import {
  Container,
  ParentContainer,
  ChildContainer,
  ElementBox,
  ElementBoxStyle,
  TextStyle,
  FormField,
  ReviewTextArea,
  Stars,
  ImageInput,
  ButtonStyle,
} from "../addPost/styles";

function EditReview() {
  return (
    <>
      <Layout children={<EditReviewComponent />} />
      {/* <ReviewHeader children={<EditReviewComponent />} /> */}
    </>
  );
}

function EditReviewComponent() {
  const array = [0, 1, 2, 3, 4];
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  return (
    <Container>
      <ParentContainer>
        <ChildContainer>
          <ElementBox>
            <TextStyle>제품링크</TextStyle>
            <FormField placeholder="url을 입력하세요" />
          </ElementBox>
          <ElementBox>
            <TextStyle>별점</TextStyle>
            <Stars>
              {array.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="25"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </ElementBox>
          <ReviewTextArea>구매후기</ReviewTextArea>
          <ElementBox>
            <TextStyle>사진첨부</TextStyle>
            <ImageInput type="file" />
          </ElementBox>
          <ElementBoxStyle direction="center">
            <ButtonStyle>수정하기</ButtonStyle>
            <ButtonStyle>취소</ButtonStyle>
          </ElementBoxStyle>
        </ChildContainer>
      </ParentContainer>
    </Container>
  );
}

export default EditReview;
