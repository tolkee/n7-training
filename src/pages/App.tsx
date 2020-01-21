import React from "react";
import Layout from "./layout";
import styled from "styled-components";
import ToolCard from "../components/ToolCard";

const AppWrapper = styled.div`
  color: white;
  display: flex;
`;

const App: React.FC = () => {
  return (
    <Layout title="N7-Training">
      <AppWrapper>
        <ToolCard
          size={140}
          link="/spellcheck"
          color="#00cc99"
          icon="fa-language"
        />
        <ToolCard link="" size={140} color="lightgrey" icon="fa-cloud" />
      </AppWrapper>
    </Layout>
  );
};

export default App;
