import styled, { css } from "styled-components";

export const Content = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-weight: 600;
  margin-top: 40px;
  margin-left: 5vw;
  text-align: left;
  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 10px;
  }
  label {
    margin-top: 10px;
    font-size: 20px;
    span {
      color: #00F0FF;
    }
  }
  button {
    background: gray;
    margin-top: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 25px;
    height: 25px;
  }
  button:focus {
    background: #00F0FF;
  }
`;

export const NextButton = styled.button`
  width: 400px !important;
  background: #00F0FF !important;
`;

export const AnswerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  button {
    margin-top: 0 !important;
    margin-right: 15px;
  }
`;

export const Title = styled.label`
  margin-top: 10px;
  font-size: 20px;
  color: grey !important;
  span{
    margin-left: 5px;
  }
`;
