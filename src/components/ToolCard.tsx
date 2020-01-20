import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title?: string;
  color: string;
  icon: string;
  link?: string;
  size: number;
}

const CardWrapper = styled(Link)<{
  color: string;
  icon: string;
  linked: boolean;
  size: number;
}>`
  ${p =>
    !p.linked &&
    `
    cursor: default;
  `}

  text-decoration: none;
  color: white;

  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: 5px;

  background-color: ${p => p.color};

  :hover {
    opacity: ${p => (p.linked ? 0.8 : 1)};
    ${p =>
      !p.linked &&
      `
      color: white;
    `}
  }
  .${p => p.icon} {
    font-size: ${p => (p.size * 60) / 100}px;
  }

  transition: opacity 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${p => (p.size * 10) / 100}px;
`;

function ToolCard(props: ToolCardProps) {
  return (
    <CardWrapper
      size={props.size}
      linked={props.link}
      to={props.link ? props.link : ""}
      icon={props.icon}
      color={props.color}
    >
      <i className={`fas ${props.icon}`}></i>
    </CardWrapper>
  );
}

export default ToolCard;
