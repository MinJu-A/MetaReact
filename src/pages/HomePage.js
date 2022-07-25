import React, { useEffect, useState } from "react";
import Home from "../components/home/Home.js";

const HomePage = () => {
  // http요청 (fetch, axios(다운))
  // db가 없으니까 임의로 만들기
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  // 빈 배열, 최초 한 번만 실행
  useEffect(() => {
    // 다운로드를 받았다고 가정한다. - fetch(), axios
    let data = [
      { id: 1, title: "제목1", content: "내용1" },
      { id: 2, title: "제목2", content: "내용2" },
      { id: 3, title: "제목3", content: "내용3" },
    ];

    // 빈 데이터가 들어간다. 왜?
    // 아직 다운이 다 안 됐으니까 비어있는 상태로 먼저 데이터를 받음
    setBoards([...data]);
    setUser({ id: 1, username: "cos" });
  }, []);

  return (
    <div>
      <Home boards={boards} setBoards={setBoards} user={user} />
    </div>
  );
};

export default HomePage;
