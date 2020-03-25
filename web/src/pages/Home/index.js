import React, {useState, useEffect} from 'react';
import {Container, Form, Side, Button} from './styles'
import {withRouter, Link} from 'react-router-dom';
import {api} from '../../services/api';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import home from '../../assets/home.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default withRouter(Home); 

  function Home({history}) {
    const [name, setName] = useState('');
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
    if (!name || !email || !password) 
      return setError("Preencha todos os campos para prosseguir");

      try {
        const response = await api.post(`/users`, {name, email, password});
        console.log(response);
        history.push('/login');

      } catch (error) {
        console.log(error);
        setError("Erro ao validar seus dados, parece que esse usúario já foi registrado.");
      }
  }



  return (
  <>
      <Header title="Home" />
     <Container>
     <Form onSubmit={handleSubmit}>
       <h5>Controle suas finanças e mantenha seu crédito em dia!</h5>
       <strong>Cadastre-se</strong>
      <input 
      onChange={event => setName(event.target.value)} 
      type="text"
      placeholder="Seu nome"/> 

      <input 
      onChange={event => setEmail(event.target.value)} 
      type="text"
      placeholder="Seu melhor email"/> 

      <input 
      onChange={event => setPassword(event.target.value)} 
      type="password"
      placeholder="Senha"/> 

      <Button>Cadastrar</Button>
      <span>Já possui uma conta? <Link to="/login">Entrar</Link></span>
      {error ? notifyError(error) : null}
      <ToastContainer />
    </Form>
    <Side>
      <img src={home} alt=""/>
    </Side>
    <Footer />
   </Container>
  </>
  );
}
