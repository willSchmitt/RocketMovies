import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
  };

  > small {
    color: ${({theme}) => theme.COLORS.GRAY_100};

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;