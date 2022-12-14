import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import Post from "./component/post/Post";
import PostModal from "./component/post/PostModal";
import SignIn from "./component/signin/SignIn";
import PostReview from "./component/review/addPost/PostReview";
import EditReview from "./component/review/edit/EditReview";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostModal />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/post/review" element={<PostReview />} />
        <Route path="/post/review/:id" element={<PostReview />} />
        <Route path="/edit/review" element={<EditReview />} />
        <Route path="/edit/review/:id" element={<EditReview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
