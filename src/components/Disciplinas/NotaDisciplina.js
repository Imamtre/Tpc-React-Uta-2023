// states

import React, { useState } from 'react';

import Card from '../UI/Card3';

import './NotaDisciplina.css';
import DataAvalia from './DataAvalia';

function NotaDisciplina(props) {
  //const [nomeUC, setnomeUC] = useState(props.nomeDisciplina);

  // let nomeUC = props.nomeDisciplina;



  return (
    <Card className="nota-disciplina">
      <DataAvalia data={props.dataAvalia} />
      <div className="nota-disciplina__description">
        <h2>{props.nomeDisciplina}</h2>
        <div className="nota-disciplina__nota">{props.valorNota}</div>
      </div>
     
    </Card>
  );
}

export default NotaDisciplina;
