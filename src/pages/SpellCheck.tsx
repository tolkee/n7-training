import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./layout";
import Card from "../components/Card";
import * as data from "../test.json";
import ListSpellCheck from "../utils/ListSpellCheck";

interface SpellCheckProps {
  title: string;
}

const SpellCheckWrapper = styled.form`
  color: white;
  width: 60%;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
const CardContent = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
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
  font-size: 40px;
  font-weight: 700;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 30px;
  }
  @media (min-width: 1281px) {
    font-size: 50px;
  }
`;

const FinishText = styled.div`
  color: #00cc99;
  font-size: 20px;
  font-weight: 700;
`;

const Input = styled.input`
  width: 70%;
  background-color: black;
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }

  ::placeholder {
    color: #606060;
  }
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
    setfinished(false);
    setValue("");
  };
  return (
    <Layout backButton title="SpellCheck">
      <SpellCheckWrapper onSubmit={(e) => {
        e.preventDefault();
        if (index === list.length - 1) {
          setfinished(true);
        } else {
          setIndex(index + 1);
          setValue("");
        }
      }}>
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
                color: list[index].corrects.map(correct => correct.toLowerCase()).includes(value.toLowerCase())
                  ? "#00d1b2"
                  : "#f14668"
              }}
              value={value}
              onChange={e => {
                setValue(e.target.value);
              }}
              className={`input is-large ${
                list[index].corrects.map(correct => correct.toLowerCase()).includes(value.toLowerCase())
                  ? "is-primary"
                  : "is-danger"
                }`}
              type="text"
              placeholder="Enter the corrected text"
            />
          </CardContent>
          <CardFooter>
            <Number>{`${index}/${list.length - 1}`}</Number>
            <div>
              {finished ? (
                <FinishText>Finished</FinishText>
              ) : (
                  <div>
                    <button
                      className="button is-medium is-warning"
                      style={{ marginRight: "10px" }}
                      type="button"
                      onClick={() => setValue(list[index].corrects[0])}
                    >
                      <span className="icon">
                        <i
                          style={{ fontSize: "30px", color: "black" }}
                          className="fas fa-bolt"
                        ></i>
                      </span>
                    </button>
                    <button
                      disabled={!list[index].corrects.map(correct => correct.toLowerCase()).includes(value.toLowerCase())}
                      className="button is-medium is-primary"
                      type="submit"
                    >
                      Continue
                  </button>
                  </div>
                )}
            </div>
          </CardFooter>
        </Card>
      </SpellCheckWrapper>
    </Layout>
  );
}

export default SpellCheck;
