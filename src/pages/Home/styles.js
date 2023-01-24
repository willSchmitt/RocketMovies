import styled from "styled-components";

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    padding: 40px 153px 0 123px;
  }

  .sectionInitial {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 52px;

    > h1 {
      font-weight: 600;
      font-size: 32px;
      line-height: 42px;
      color: ${({theme}) => theme.COLORS.WHITE}
    }

    Button {
      width: 207px;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }
  }


`;