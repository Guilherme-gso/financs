import styled from 'styled-components';

export const Container = styled.div`
  margin: 180px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    margin-top: 10px;
    padding: 7px;
  }
`;

export const Board = styled.div`
display: flex;
flex-direction: column;


strong {
  font-size: 18px;
}
 button {
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  border: none;
  color: #c00;
  cursor: pointer;
 }
 span {
   font-size: 22px;
 }
`;



