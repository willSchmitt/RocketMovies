import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  Header {
    margin: 0 auto;
  }

  main {
    margin: 0 auto;
    width: 1170px;
  }

  .infPreview {
    a {
      margin-top: 40px;
      margin-bottom: 24px;
      
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({theme}) => theme.COLORS.PINK};
    }

    .titlePreview {
      display: flex;
      align-items: center;
      gap: 19px;
    }
    h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;  
      color: ${({theme}) => theme.COLORS.WHITE};

      svg {
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.PINK};
      }
    }

    .infAvatar {
      margin-top: 24px;
      margin-bottom: 40px;

      display: flex;
      align-items: center;
      gap: 8px;

      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${({theme}) => theme.COLORS.WHITE};

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #3E3B47;
      }

      p {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      svg {
        color: ${({theme}) => theme.COLORS.PINK}
      }
    }
  }
    
    .tagsPreview {
      display: flex;
      gap: 8px;

      margin-bottom: 40px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      align-items: center;
      text-align: justify;

      color: ${({theme}) => theme.COLORS.WHITE};
    }
`;