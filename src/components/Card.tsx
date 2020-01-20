import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
}

const Wrapper = styled.nav`
  height: fit-content;
  padding: 15px;
  box-sizing: border-box;
  background-color: #171717;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Card(props: CardProps) {
  return <Wrapper>{props.children}</Wrapper>;
}

export default Card;
