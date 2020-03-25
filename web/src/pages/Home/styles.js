import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media(max-width: 570px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  margin-left: 20px;
  
  h5 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  
  strong {
    font-size: 30px;
    margin-bottom: 22px;
    text-align: center;
  }
  input {
    width: 80%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #54426B;
    border-radius: 2px;
    background-color: transparent;
    &:focus {
      border: 1px solid #623CEA;
    }
  }
  span {
    margin-top: 15px;
  }
  a {
    text-decoration: none;
    color: #623CEA;
  }

  @media(max-width: 570px) {
    input, button{width: 100%;}
    margin: 10px;
  }
`;

export const Side = styled.article`
  margin-top: 70px;
  img {
    height: 400px;
  }
  @media(max-width: 570px) {
    img{display: none;}
    h5{font-size: 15px;}
  }
`;

export const Button = styled.button`
 
    margin-top: 15px;
    width: 80%;
    padding: 15px;
    background-color: #623CEA;
    border: none;
    cursor: pointer;
    color: #fff;
    border-radius: 7px;

`;
