import styled from "styled-components";

export const Container = styled.div`

  width: 100%;

  header {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    height: 144px;

    padding: 64px 144px;
    > a {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: ${({theme}) => theme.COLORS.PINK};
      
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


  .classInput {
    width: 340px;
    margin-top: 20px;
    
    >div:nth-child(4) {
    margin-top: 24px;
  }
  }

  > img {
      border-radius: 50%;
      width: 186px;
      height: 186px;

      position: relative;
      margin: -90px auto 32px;
    }

  > Input {

  }
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;
  }

  input {
    display: none;
  }
    svg {
      width: 20px;
      height: 20px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    };
  `