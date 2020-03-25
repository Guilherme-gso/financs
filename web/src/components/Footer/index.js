import React from 'react';

import { Container } from './styles';

export default function Footer() {
  const date = new Date();
  return (
    <Container>
      <strong>Todos os direitos reservados &copy; - {date.getFullYear()} -  <small> Guilherme Gonçalves</small> </strong>
    </Container>
  );
}
