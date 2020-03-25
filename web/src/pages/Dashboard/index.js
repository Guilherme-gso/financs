import React, {useEffect, useState} from 'react';
import {Container, Main, Credits, Debts} from './styles';
import {Link, withRouter} from 'react-router-dom';
import {api} from '../../services/api';
import {getToken, isLogout} from '../../services/auth';
import Header from '../../components/Header';

export default withRouter(Dashboard) 
function Dashboard({history}) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadUserDatas() {
      const token = getToken();
      const response = await api.get(`/summary`, {token});
      setUser([response.data]);
    }
    loadUserDatas();
  },[]);

  function handleLogout () {
    isLogout();
    history.push('/');
  }
  return (
    <>
    <Header title="Dashboard" />
     <Container>
     {user.map(user => (
        <Main key={user.name}>
          <h1>Bem vindo {user.name} </h1> 
          <Credits>Seus créditos são de: R${user.credit}</Credits> 
          <Debts>Seus débitos são de: R${user.debt}</Debts> 
          <Link to="/finances">Consulte as finanças cadastradas.</Link>
          <a href="/" onClick={() => handleLogout()}>Sair</a>
        </Main>
      ))}
     </Container>
    </>
  );
}
