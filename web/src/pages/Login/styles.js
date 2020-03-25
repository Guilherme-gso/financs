import styled from 'styled-components';

export const Container = styled.div`
  margin: 180px auto;
  width: 400px;

  @media(max-width: 570px) {
    width: 320px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  /* @media(max-width: 570px) {
    display: flex;
  } */
  
  label {
    font-size: 22px;
  }
  input {
    padding: 10px;
    border: 1px solid #623CEA;
    border-radius: 2px;
    font-size: 18px;
  }

    span {
      text-align: center;
      font-weight: bold;
      margin-top: 7px;
    }
    a {
      text-decoration: none;
      color: #54426B;
    }
`;
export const Button = styled.button`
    padding: 20px;
    background-color: #623CEA;
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #54426B;
    }
`;
