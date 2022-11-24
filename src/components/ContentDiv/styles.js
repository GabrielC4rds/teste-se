import styled, { css } from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  h1{
    font-size: 20px;
  }
  img{
    width: 20px;
    height: 20px;
  }
`;

export const ArrowDown = styled.img`
  transform: rotate(90deg);
`;

export const ArrowUp = styled.img`
  transform: rotate(-90deg);
`;

export const DropdownDiv = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;