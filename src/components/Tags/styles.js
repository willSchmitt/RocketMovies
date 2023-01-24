import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.TAGS};
  width: 120px;

  border-radius: 8px;

  font-size: 10px;
  line-height: 14px;
  font-weight: 400;

  padding: 5px 16px;
  
`;