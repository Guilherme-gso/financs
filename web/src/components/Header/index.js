import React from 'react';
import {MdAttachMoney, MdDashboard} from 'react-icons/md';
import { Head } from './styles';

export default function Header(props) {
  return (
      <Head>
        <span>{props.title === 'Home' ? 'Financs' : 'Dashboard'}</span>
        <strong>{props.title === 'Home' ? <MdAttachMoney /> : <MdDashboard />}</strong>
      </Head>
  );
}
