import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
      {props.children}
    </LayoutWrapper>
  );
}

export default Layout;
