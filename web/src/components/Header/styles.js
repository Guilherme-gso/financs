import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  font-size: 45px;
  background-color: #54426B;
  padding: 20px 0px 10px 10px;

  span {
    color: #DBD5B2;
    font-weight: bold;

  }
  strong {
    padding-top: 8px;
    color: #DBD5B2;
  }
  @media(max-width: 570px) {
    display: flex;
    justify-content: center;
  }

`;
