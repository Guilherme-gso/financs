import styled from 'styled-components';

export const Container = styled.div`
  margin: 70px auto;
  width: 500px;

  @media(max-width: 570px) {
    width: 300px;
  }
  a {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  @media(max-width: 570px) {
    margin-right: 20px;
  }
  
  label {
    font-size: 15px;
  }
  input {
    padding: 10px;
    border: 1px solid #623CEA;
    border-radius: 2px;
    font-size: 18px;
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

  export const FormGrid = styled.div`
   @media(max-width: 570px) {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    
  `;

  

