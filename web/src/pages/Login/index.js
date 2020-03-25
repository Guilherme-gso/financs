import React, {useState, useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Container, Form, Button} from './styles';
import {api} from '../../services/api';
import {isLogin} from '../../services/auth';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default withRouter(Login); 

  function Login({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  const notifyError = () => {
    toast.error(error, {
      position: 'top-right',
      pauseOnHover: true,
      autoClose: true,
    });
  }
  useEffect(() => {
    setError(null);
  }, [error])

  async function handleSubmit(e) {
    e.preventDefault(e);
    if (!email || !password) 
      return setError("Preencha todos os campos para prosseguir");

      try {
        const response = await api.post(`/auth`, {email, password});
        const {token} = response.data;
        isLogin(token);
        history.push('/dashboard');

      } catch (error) {
        console.log(error);
        setError("Erro ao validar seus dados, verifique-os e tente novamente.");
      }
  }



  return (
    <Container>
  <Form onSubmit={handleSubmit}>   
    <label htmlFor="">Email:</label>
    <input 
    onChange={event => setEmail(event.target.value)} 
    type="text"/> <br/>

    <label htmlFor="">Senha:</label>
    <input 
    onChange={event => setPassword(event.target.value)} 
    type="password"/> <br/>

    <Button>Entrar</Button>
    <span>Ainda não possui uma conta? <Link to="/">Cadastre-se</Link></span>
    {error ? notifyError(error) : null}
    <ToastContainer />
  </Form>
    </Container>
  );
}
