import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";
import { PostDiv } from "./styles";
import Post from "./Post";

function Posts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, post } = useSelector((state) => state.post);
  const posts = post.data;
  console.log(post);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  if (isLoading) {
    <div>로딩 중...</div>;
  }

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <PostDiv>
      {posts?.map((eachpost) => (
        <Post eachpost={eachpost} key={eachpost.id} />
      ))}
    </PostDiv>
  );
}

export default Posts;
