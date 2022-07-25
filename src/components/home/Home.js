import React from "react";
import styled from "styled-components";

// Function 방식
// class방식은 방법이 따로 있다.

// 부모로부터 받아온 데이터를 가지고 스타일링을 동적으로 하려면?
// onclick에 해놓은 props ={user} 는 할 필요가 없음!
const StyledDeleteButton = styled.button`
  color: ${(props) => (props.username === "ssar" ? "blue" : "red")};
`;

// 스타일 확장
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.username === "ssar" ? "blue" : "red")};
  background-color: green;
`;
const Home = (props) => {
  // 구조분할 할당 이 형식을 자동으로 받아온다.
  const { boards, setBoards, user } = props;

  return (
    <div>
      <h1>홈페이지입니다.</h1>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3 key={board.id}>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
