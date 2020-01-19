import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title?: string;
  color: string;
  icon: string;
  link: string;
}

const CardWrapper = styled(Link)<{ color: string; icon: string }>`
  cursor: pointer;
  text-decoration: none;
  color: white;

  width: 140px;
  height: 140px;
  border-radius: 5px;

  background-color: ${p => p.color};

  :hover {
    opacity: 0.8;
  }
  .${p => p.icon} {
    font-size: 70px;
  }

  transition: opacity 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function ToolCard(props: ToolCardProps) {
  return (
    <CardWrapper to={props.link} icon={props.icon} color={props.color}>
      <i className={`fas ${props.icon}`}></i>
    </CardWrapper>
  );
}

export default ToolCard;
