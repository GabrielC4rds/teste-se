/* eslint-disable react/react-in-jsx-scope */
// import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import React, { useContext } from "react";
import { Content, NextButton, AnswerDiv, Title } from "./styles";
import FakeApi from "../../FakeApi.json";
import { StoreContext } from "./../../Context";
import { useEffect } from "react";
import { useState } from 'react';

export default function AnswerGroup() {
  const [id, setId] = useContext(StoreContext);
  const [option, setOption] = useState();
  const totalQuestions = FakeApi.exercisesList.length;
  const [points, setPoints] = useState(0);


  useEffect(() => {
    setId(1);
  }, []);

  const NextQuestion = (isCorrect) => {
    if(isCorrect){
      setPoints(points + 1);
    }
    if (id < totalQuestions) {
      setId(id + 1);
    }else{
      alert(`Você acertou ${points} de ${totalQuestions} questões`)
    }
  };

  return (
    <Content>
      <>
        {id ? (
          <Title>
            ({FakeApi.exercisesList[id - 1].creationYear}) 
            <span>
               Exercício {id}/{totalQuestions}
            </span>
          </Title>
        ) : (
          <Title>
            ({FakeApi.exercisesList[0].creationYear}) 
            <span>
               Exercício {id}/{totalQuestions}
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
                  <button onClick={() => setOption(res.isCorrect)}>{res.option}</button>
                  {res.answer}
                </AnswerDiv>
              );
            })
          : FakeApi.exercisesList[0].answers.map((res) => {
              return (
                <AnswerDiv>
                  <button onClick={() => setOption(res.isCorrect)}>{res.option}</button>
                  {res.answer}
                 
                </AnswerDiv>
              );
            })}
      </div>
      <NextButton onClick={() => NextQuestion(option)}>Concluído</NextButton>
    </Content>
  );
}
