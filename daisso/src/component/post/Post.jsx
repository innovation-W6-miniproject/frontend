import React from "react";
import { useNavigate } from "react-router-dom";
import { PostBox, PostContent } from "./styles";

function Post({ eachpost }) {
  const navigate = useNavigate();
  const star = eachpost.star;
  return (
    <PostBox
      onClick={() => {
        navigate(`/post/${eachpost.id}`);
      }}
    >
      <PostContent>
        <img src={eachpost.productUrl} width="200" height="200" />
        {/* DESC: productName이 199px을 넘어갈 경우 ... 으로 표시하고 가운데 정렬 */}
        <p
          style={{
            width: "199px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {eachpost.productName}
        </p>
        <div>{"⭐️".repeat(star)}</div>
      </PostContent>
    </PostBox>
  );
}

export default Post;
