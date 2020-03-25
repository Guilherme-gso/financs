import React, {useState, useEffect} from 'react';
import {Container, Form, FormGrid, Button} from './styles';
import {MdArrowBack} from 'react-icons/md';
import {withRouter, Link} from 'react-router-dom';
import {api} from '../../services/api';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
export default withRouter(NewFinance);
 
 function NewFinance({history}) {
   const [name, setName] = useState('');
   const [month, setMonth] = useState('');
   const [year, setYear] = useState('');
   const [debts, setDebts] = useState('');
   const [credits, setCredits] = useState('');
   const [nameCredit, setNameCredit] = useState('');
   const [nameDebt, setNameDebt] = useState('');
   const [error, setError] = useState('');
   const [success, setSucess] = useState('');
   
   const notifyError = (error) => {
    toast.error(error, {
      position: "top-right",
      autoClose: true,
      pauseOnHover: true,
    });
    }

    const notifySuccess = (msg) =>  toast.success(msg, {
      position: "top-right",
      autoClose: true,
      pauseOnHover: true,
    });

   async function handleSubmit(e) {
     e.preventDefault();
     if (!name || !month || !year || !debts || !credits || !nameCredit || !nameDebt) 
      return setError("Preencha todos os campos para prosseguir");

    try {
      const response = await api.post(`/add/finance`, {
        name,
        month,
        year,
        debts,
        credits,
        nameCredit,
        nameDebt
      });

      console.log(response.data);
      setSucess(true);

      setTimeout(() => {
        history.push('/finances');
      }, 4000);

    } catch (error) {
      console.log(error);
      setError(`Houve um problema ao registrar nova finança, verifique 
      se os dados estão cadastrados de acordo com o que pede o formulário.`);
    }
   }
    useEffect(() => {
      setError(null);
    }, [error])

  return (
    <Container>
      <Link to="/finances"><MdArrowBack/></Link>
      <Form onSubmit={handleSubmit}>
      <label htmlFor="">Nome: </label>
      <input 
      type="text" 
      onChange={event => setName(event.target.value)}
      /> 

      <label htmlFor="">Mês: </label>
      <input 
      type="text"
      onChange={event => setMonth(event.target.value)}
      /> 

      <label htmlFor="">Ano: </label>
      <input
      type="text"
      onChange={event => setYear(event.target.value)}
      /> 
      
      <FormGrid>
        <input
        type="text"
        onChange={event => setCredits(event.target.value)}
        placeholder="Créditos gerados"/>

        <input
        type="text"
        onChange={event => setNameCredit(event.target.value)}
        placeholder="Status de créditos"/> 

        <input
        type="text"
        onChange={event => setDebts(event.target.value)}
        placeholder="Débitos gerados"/> 

        <input
        type="text"
        onChange={event => setNameDebt(event.target.value)}
        placeholder="Status de débitos"/> 
      </FormGrid>

      <Button>Adicionar</Button>
      {error && notifyError(error)}
      {success === true ? notifySuccess("Nova finança cadastrada com sucesso") : null}
      <ToastContainer/>
    </Form>
    </Container>
  );
}
