import React from "react";
import Layout from "./layout";
import styled from "styled-components";
import ToolCard from "../components/ToolCard";

const AppWrapper = styled.div`
  color: white;
`;

const App: React.FC = () => {
  return (
    <Layout title="n7-training">
      <AppWrapper>
        <ToolCard link="/spellcheck" color="#00cc99" icon="fa-language" />
      </AppWrapper>
    </Layout>
  );
};

export default App;
