import styled from "styled-components";

export const Container = styled.div`

height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;




  > header {
    display: flex;
    align-items: center;
    gap: 95px;

    h1 {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: ${({theme}) => theme.COLORS.PINK};
    }

    .inputHeader {
      width: 630px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    .avatar {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 9px;
        width: 100%;

        .avatar_Name {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          > small {
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;

            width: 106px;

            color: ${({theme}) => theme.COLORS.WHITE}
          }

          > a {
            color: ${({theme}) => theme.COLORS.HEADER};
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;

            text-decoration: none;
          }
        }

    
        img {
          width: 64px;
          height: 64px;

          border-radius: 50%;
          border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

          cursor: pointer;
        }
    }


}

`;