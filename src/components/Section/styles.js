import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 133, 155, 0.05);
  height: 220px;
  margin-top: 38px;
  border-radius: 16px;
  
  > main {
    display: flex;
    flex-direction: column;
    padding: 22px;
    gap: 15px;
  }

   > .sectionInitial {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
  }

  h1 {
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  .tagsSection {
    display: flex;
    gap: 8px;
    align-items: center;
    
    cursor: pointer;
  }

  .tagsSection:hover {
    filter: brightness(0.9);
  }
`;