import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./layout";
import Card from "../components/Card";
import * as data from "../test.json";

interface SpellCheckProps {
  title: string;
}

const SpellCheckWrapper = styled.div`
  color: white;
  width: 70%;
  height: 40%;
`;

const CardHeader = styled.div``;
const CardContent = styled.div`
  text-align: center;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Text = styled.div`
  text-align: center;
  color: white;
  font-size: 50px;
  font-weight: 700;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 70%;
`;

const Number = styled.div`
  text-align: center;
  color: #00cc99;
  font-size: 20px;
  font-weight: 500;
`;
function SpellCheck(props: SpellCheckProps) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(data.list1[index].false);
  return (
    <Layout title="N7|SpellCheck">
      <SpellCheckWrapper>
        <Card>
          <CardHeader>
            <Text>{data.list1[index].false}</Text>
          </CardHeader>
          <CardContent>
            <Input
              value={value}
              onChange={e => {
                setValue(e.target.value);
              }}
              className={`input is-large ${value === data.list1[index].correct ? "is-primary" : "is-danger"}`}
              type="text"
              placeholder="Enter the correct text"
            />
          </CardContent>
          <CardFooter>
            <Number>{`${index}/${data.list1.length - 1}`}</Number>
            {value === data.list1[index].correct ? (
              <button
                onClick={() => {
                  setIndex(index + 1);
                  setValue(data.list1[index + 1].false);
                }}
                className="button is-medium is-primary"
              >
                Continue
              </button>
            ) : (
                <button disabled className="button is-medium is-primary">
                  Continue
              </button>
              )}
          </CardFooter>
        </Card>
      </SpellCheckWrapper>
    </Layout>
  );
}

export default SpellCheck;
