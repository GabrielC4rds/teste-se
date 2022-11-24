/* eslint-disable react/react-in-jsx-scope */
// import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import React, {useState} from "react";
import { Content } from "./styles";
import QuestionCard from "../QuestionCard";
import FakeApi from "../../FakeApi.json";

export default function QuestionCardGroup() {


  return (
    <Content>
      <h1>Uso dos Porquês</h1>
      <div>
        {FakeApi.exercisesList.map((res) => {
          return (
            // eslint-disable-next-line no-unused-expressions
            <QuestionCard key={res.id} id={res.id} onClick={console.log("clicou1")} title={res.title}></QuestionCard>
            );
        })}
      </div>
    </Content>
  );
}
