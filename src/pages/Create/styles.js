import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  Header {
    margin: 0 auto;
  }

  main {
    max-width: 1170px;  
    margin: 0 auto;

    overflow-y: scroll;

    > a {
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
  }
  
  > h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;

    color: ${({theme}) => theme.COLORS.WHITE};

  }

  .name_Note{
    margin-top: 40px;
    margin-bottom: 40px;

    display: flex;
    gap: 40px;
  }

  .name_Note Input {
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TEXTAREA};
  }

  textarea {
    width: 1170px;
    height: 274px;
    padding: 19px 16px;

    border-radius: 10px;
    border: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TEXTAREA};
    color: ${({theme}) => theme.COLORS.WHITE}
  }

  .markers {
    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;

      margin-top: 40px;
      margin-bottom: 24px;
      
      color: #999591;
    }

    > .section{
    display: flex;
    align-items: center;
    gap: 24px;

    padding: 16px;

    background-color: #0D0C0F;
      
    height: 88px;

    border-radius: 8px;

    > .react {
      width: 113.16px;
      height: 56px;
      background: #262529;
      border-radius: 10px;


      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 16px;

      > a {
        display: flex;
        align-items: center;
        gap: 16px;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        svg {
          color: ${({theme}) => theme.COLORS.RED};
          font-size: 22px;
        }
      }
    }

    .newMarker {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;

        width: 180px;
        height: 56px;

        border: 2px dashed #948F99;
        border-radius: 10px;

        >a {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: ${({theme}) => theme.COLORS.HEADER};

          display: flex;
          align-items: center;
          gap: 16px;
          
          svg {
          color: ${({theme}) => theme.COLORS.RED};
          font-size: 22px;
        }
        }
    }

  }
}

.buttonsCreate {
  margin-top: 40px;
  margin-bottom: 40px;
  
  display: flex;
  gap: 40px;

  .removeMovie {
    background: #0D0C0F;
    
    color: ${({theme}) => theme.COLORS.PINK};
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
  }
}

`;  