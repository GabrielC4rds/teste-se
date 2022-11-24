/* eslint-disable react/react-in-jsx-scope */
// import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import React from "react";
import { Content, DropdownDiv, ArrowUp, ArrowDown } from "./styles";
import QuestionCardGroup from "../QuestionCardGroup";
import AnswerGroup from "../AnswerGroup";
import { useState } from "react";

export default function ContentDiv() {
  const [ dropdownOpened, setDropdownOpened ] = useState(false);

  const openDropdown = () => 
    setDropdownOpened(current => !current);
  ;

  return (
    <Content>
      <DropdownDiv onClick={openDropdown}>
        <h1>Acentuação Gráfica</h1>
        {dropdownOpened?
        <ArrowUp src="../arrow.png"></ArrowUp>:
        <ArrowDown src="../arrow.png"></ArrowDown>}
      </DropdownDiv>
      {dropdownOpened && (
        <>
          <QuestionCardGroup />
          <AnswerGroup />
        </>
      )}
    </Content>
  );
}
