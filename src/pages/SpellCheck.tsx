import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./layout";
import Card from "../components/Card";
import * as data from "../test.json";
import ListSpellCheck from "../utils/ListSpellCheck";

interface SpellCheckProps {
  title: string;
}

const SpellCheckWrapper = styled.div`
  color: white;
  width: 70%;
  height: 40%;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
const CardContent = styled.div`
  text-align: center;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Text = styled.div`
  flex-grow: 0;
  color: white;
  font-size: 50px;
  font-weight: 700;
  margin-top: 20px;
`;

const FinishText = styled.div`
  color: #00cc99;
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 70%;
  background-color: black;
`;

const Number = styled.div`
  text-align: center;
  color: #00cc99;
  font-size: 20px;
  font-weight: 500;
`;
function SpellCheck(props: SpellCheckProps) {
  const reducer = (acc: ListSpellCheck[], curr: ListSpellCheck[]) =>
    acc.concat(curr);

  const [list, setList] = useState<ListSpellCheck[]>(
    data.lists.reduce(reducer)
  );
  const [index, setIndex] = useState<number>(0);
  const [finished, setfinished] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const onSelectChange = (e: any) => {
    +e.target.value === -1
      ? setList(data.lists.reduce(reducer))
      : setList(data.lists[+e.target.value]);
    setIndex(0);
  };
  return (
    <Layout title="N7|SpellCheck">
      <SpellCheckWrapper>
        <Card>
          <CardHeader>
            <div className="control has-icons-left">
              <div className="select is-medium is-primary">
                <select
                  onChange={onSelectChange}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <option defaultChecked value={-1}>
                    All List
                  </option>
                  {data.lists.map((list, index) => (
                    <option value={index}>List {index}</option>
                  ))}
                </select>
              </div>
              <span className="icon is-left">
                <i className="fas fa-list"></i>
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <Text>{list[index].false}</Text>
            <Input
              style={{
                color: list[index].corrects.includes(value)
                  ? "#00d1b2"
                  : "#f14668"
              }}
              value={value}
              onChange={e => {
                setValue(e.target.value);
              }}
              className={`input is-large ${
                list[index].corrects.includes(value)
                  ? "is-primary"
                  : "is-danger"
              }`}
              type="text"
              placeholder="Enter the correct text"
            />
          </CardContent>
          <CardFooter>
            <Number>{`${index}/${list.length - 1}`}</Number>
            {finished ? (
              <FinishText>Finished</FinishText>
            ) : (
              <button
                disabled={!list[index].corrects.includes(value)}
                onClick={() => {
                  if (index === list.length - 1) {
                    setfinished(true);
                  } else {
                    setIndex(index + 1);
                    setValue("");
                  }
                }}
                className="button is-medium is-primary"
              >
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
