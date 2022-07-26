import React, { useState } from "react";
import styled from "styled-components";

const ListPage = () => {
  // 각각의 input에 모두 상태를 줘야 한다.
  const [post, setPost] = useState({
    id: 0,
    title: " ",
    content: " ",
  });
  const StyledItemBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    height: 100px;
    margin: 20px;
    align-items: center;
  `;
  const [posts, setPosts] = useState([
    { id: 1, title: "내용1", content: "내용1" },
    { id: 2, title: "내용2", content: "내용2" },
    { id: 3, title: "내용3", content: "내용3" },
    { id: 4, title: "내용4", content: "내용4" },
    { id: 5, title: "내용5", content: "내용5" },
  ]);

  const handWrite = (e) => {
    //폼 태그가 하려는 액션을 중지ㅛㅣ킨다.
    e.preventDefault();

    // posts 배열에 post값을 넣어주면 됩니다
    setPosts([...posts, post]);
  };

  //   event를 들고 올 거니까 e
  const handChangeTitle = (e) => {
    console.log(e.target.value);
    setPost({ title: e.target.value });
  };

  const handChangeContent = (e) => {
    console.log(e);
    setPost({ content: e.target.value });
  };

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    // 키값을 동적으로 할당하는 문법 computed property names
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    console.log(post.title);
    console.log(post.content);
  };

  return (
    <div>
      <h1>리스트 페이지</h1>
      <form onSubmit={handWrite}>
        {/* 내가 여기서 적은 글을 버튼 누를 때 캐치를 해야 한다  */}
        <input
          type='text'
          placeholder='제목을 입력하세요'
          value={post.title}
          onChange={handleForm}
          name='title'
        />
        <input
          type='text'
          placeholder='내용을 입력하세요'
          value={post.content}
          onChange={handleForm}
          name='content'
        />
        <button type='button' onClick={handWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            번호 : {post.id} 제목 :{post.title} 내용:{post.content}
          </div>
          <div>
            <button>삭제</button>
          </div>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
