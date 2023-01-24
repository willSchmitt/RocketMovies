import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  background-color: ${({theme}) => theme.COLORS.PINK};

  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
`;