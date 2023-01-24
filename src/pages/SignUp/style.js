import styled from "styled-components";

import backgroundImg from '../../assets/cine.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;   

  background: ${({theme}) => theme.COLORS.BACKGROUND_600};

  main {
    max-width: 320px;
    margin: 235px 134px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;
  };

  > small {
    color: ${({theme}) => theme.COLORS.GRAY_100};

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  };

  > .login {
    width: 340px;
    margin-top: 48px;

    display: flex;
    flex-direction: column;

    small {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    margin-bottom: 48px;
    }

    a {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;

      color: ${({theme}) => theme.COLORS.PINK};

      margin-top: 42px;
    }
  };
}
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;