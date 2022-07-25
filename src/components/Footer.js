import React from "react";
import styled from "styled-components";

// 하나의 컴포넌트 생성(재사용을 위함)
const FooterList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <div>
      <FooterList>
        <ul>
          <li>오시는 길 : 서울 강남구...</li>
          <li>전화번호 : 01022984454</li>
        </ul>
      </FooterList>
    </div>
  );
};

export default Footer;
