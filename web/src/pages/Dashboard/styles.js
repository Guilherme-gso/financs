import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;
export const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h1 {
    font-size: 35px;
    margin-bottom: 22px;
  }
  a {
    text-decoration: none;
    margin-top: 10px;
    text-align: center;
    color: #623CEA;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
  @media(max-width: 570px) {
    margin: 20px;
  }
`;

export const Credits = styled.div`
  font-size: 22px;
  font-weight: bold;
  background-color: #470FF4;
  padding: 35px;
  margin-bottom: 10px;
  border-radius: 15px;
  color: #ccc;
  cursor: pointer;
  &:hover {
    transition: ease-in-out;
    padding: 38px;
  }
`;
export const Debts = styled.div`
  font-size: 22px;
  font-weight: bold;
  background-color: #FD151B;
  padding: 35px;
  border-radius: 15px;
  color: #ccc;
  cursor: pointer;
  &:hover {
    transition: ease-in-out;
    padding: 38px;
  }
`;