import React from "react";
import { useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { PostBox, PostContent } from "./styles";

function Post({ eachpost }) {
  const navigate = useNavigate();
  const star = "⭐️".repeat(eachpost.star);
  const productName = eachpost.productName;
  const product = productName.replace(/\[.*?\]/g, "").replace(/\-.*/, "");
  const token = useToken();
  const checkUser = () => {
    token ? navigate(`/post/${eachpost.id}`) : alert("로그인이 필요합니다.");
  };

  return (
    <PostBox onClick={checkUser}>
      <PostContent>
        <img src={eachpost.productImg} width="200" height="200" />
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
          {product}
        </p>
        <div>{star}</div>
      </PostContent>
    </PostBox>
  );
}

export default Post;
