import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  backButton?: boolean;
}

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TopBar = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  padding: 30px;
  display: flex;
`;

function Layout(props: LayoutProps) {
  return (
    <LayoutWrapper>
      <Helmet>
        <title>{`N7 | ${props.title}`}</title>
        <style>
          {`
            body,
            html {
              font-family: "Montserrat", sans-serif;
              margin: 0;
              background-color: #121212;
            }
          `}
        </style>
      </Helmet>
      {props.children}
      <TopBar>
        {props.backButton && (
          <Link to="/" className="icon has-text-primary">
            <i style={{ fontSize: "40px" }} className="fas fa-chevron-left"></i>
          </Link>
        )}
      </TopBar>
    </LayoutWrapper>
  );
}

export default Layout;
