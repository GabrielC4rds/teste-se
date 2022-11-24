/* eslint-disable react/react-in-jsx-scope */
// import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import React, { useContext } from "react";
import { Content, NextButton, AnswerDiv, Title } from "./styles";
import FakeApi from "../../FakeApi.json";
import { StoreContext } from "./../../Context";
import { useEffect } from "react";

export default function AnswerGroup() {
  const [id, setId] = useContext(StoreContext);

  useEffect(() => {
    setId(1);
    if (id <= FakeApi.exercisesList.length) {
    }
  }, []);

  const NextQuestion = () => {
    if (id < FakeApi.exercisesList.length) {
      setId(id + 1);
    }
  };

  return (
    <Content>
      <>
        {id ? (
          <Title>
            ({FakeApi.exercisesList[id - 1].creationYear}) 
            <span>
               Exercício {id}/{FakeApi.exercisesList.length}
            </span>
          </Title>
        ) : (
          <Title>
            ({FakeApi.exercisesList[0].creationYear}) 
            <span>
               Exercício {id}/{FakeApi.exercisesList.length}
            </span>
          </Title>
        )}
        {id ? (
          <label>
            ({FakeApi.exercisesList[id - 1].educationInstituition}) Analise as
            afirmativas a seguir:
          </label>
        ) : (
          <label>
            ({FakeApi.exercisesList[0].educationInstituition}) Analise as
            afirmativas a seguir:
          </label>
        )}
        {id
          ? FakeApi.exercisesList[id - 1].affirmativeQuestions.map((res) => {
              return (
                <div>
                  <label>{res}</label>
                </div>
              );
            })
          : FakeApi.exercisesList[0].affirmativeQuestions.map((res) => {
              return (
                <div>
                  <label>{res}</label>
                </div>
              );
            })}
        <label>Com relação ao uso dos porquês, estão corretas:</label>
      </>
      <div>
        {id
          ? FakeApi.exercisesList[id - 1].answers.map((res) => {
              return (
                <AnswerDiv>
                  <button>{res.option}</button>
                  {res.answer}
                </AnswerDiv>
              );
            })
          : FakeApi.exercisesList[0].answers.map((res) => {
              return (
                <AnswerDiv>
                  <button>{res.option}</button>
                  {res.answer}
                </AnswerDiv>
              );
            })}
      </div>
      <NextButton onClick={() => NextQuestion()}>Concluído</NextButton>
    </Content>
  );
}
