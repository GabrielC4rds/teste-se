/* eslint-disable react/react-in-jsx-scope */
// import { Title, Desc, MoreInfs } from "../Global/globalStyles";
import React, { useContext } from 'react';
import { ContentButton } from "./styles";
import { StoreContext } from './../../Context';

export default function QuestionCard(props) {

  const [id, setId] = useContext(StoreContext);

  return (
      <ContentButton onClick={() => setId(props.id)}>
        <label>{props.title}</label>
      </ContentButton>
  );
}
