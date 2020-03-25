import React, {useState, useEffect} from 'react';
import {Container, Board} from './styles';
import {MdCreate, MdDetails} from 'react-icons/md';
import {FaTrash} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {api} from '../../services/api';

export default function Finances() {
  const [finances, setFinances] = useState([]);
  
  
  useEffect(() => {
    async function loadFinances() {
      const response = await api.get(`/finances`);
      const {finance} = response.data;
      setFinances(finance);
    }
    loadFinances();
  }, []);

  async function handleRemove(id) {
    console.log(id);
    await api.delete(`/delete/finance/${id}`);
    const result = finances.filter(finance => {
      return finance._id !== id; 
    });
    console.log(result);
    setFinances(result);
  }
 
  return (
    <Container>
      {finances.length !== 0 ? finances.map(finance => (
        <Board key={finance._id}>
          <strong>Nome: {finance.name} || </strong> 
          <strong>Mês: {finance.month} || </strong> 
          <strong>Ano: {finance.year} || </strong> 
          <strong>Débitos gerados:<small>(insira apenas numeros)</small> {finance.debts}R$ || </strong> 
          <strong>Status de Débitos: {finance.nameDebt} || </strong> 
          <strong>Créditos gerados<small>(insira apenas numeros)</small>: {finance.credits}R$ || </strong> 
          <strong>Status de Créditos: {finance.nameCredit} || </strong> 
          <button onClick={() => handleRemove(finance._id)}>
            <span><FaTrash/></span>
          </button>
        </Board>
      )) : <span>Você ainda não cadastrou nenhuma finança.</span>} 

      <Link to="/add/finance"><span>Cadastrar nova finança <MdCreate/></span></Link> 
      <Link to="/dashboard"><span>Visualizar valores <MdDetails/></span></Link>
    </Container>
  );
}
