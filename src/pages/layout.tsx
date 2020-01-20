import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  menuButton?: boolean;
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
`;

function Layout(props: LayoutProps) {
  return (
    <LayoutWrapper>
      <Helmet>
        <title>{props.title}</title>
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
      <TopBar>
        {props.menuButton && (
          <Link to="/">
            <button className="button is-medium is-primary is-outlined">
              <span className="icon">
                <i
                  style={{ fontSize: "30px", color: "white" }}
                  className="fas fa-bars"
                ></i>
              </span>
            </button>
          </Link>
        )}
      </TopBar>
      {props.children}
    </LayoutWrapper>
  );
}

export default Layout;
