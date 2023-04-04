// props


import React, { useState } from 'react';

import Disciplinas from "./components/Disciplinas/Disciplinas";
import NovaDisciplina  from "./components/NovaDisciplina/NovaDisciplina";

const disciplinas = [
  {
    dataAvalia: new Date(2022, 5, 22),
    nomeDisciplina: 'Algoritmos e Estruturas de Dados I',
    valorNota: 17.2,
  },
  {
    dataAvalia: new Date(2022, 3, 2),
    nomeDisciplina: 'Inteligência Artificial',
    valorNota: 13.2,
  },
  {
    dataAvalia: new Date(2021, 5, 18),
    nomeDisciplina: 'Análise Numérica I',
    valorNota: 15.7,
  },
  {
    dataAvalia: new Date(2020, 8, 29),
    nomeDisciplina: 'Probabilidades e Estatística',
    valorNota: 14.4,
  },
  {
    dataAvalia: new Date(2021, 8, 29),
    nomeDisciplina: 'Introdução a Progrmação',
    valorNota: 14.4,
  }
];

function App() {
  
  const [dadosDisciplinas, setDadosDisciplinas] = useState(disciplinas);
  
  const addDisciplinaHandler = (disciplina) => {
      setDadosDisciplinas( (prevState) => {
        return [disciplina, ...prevState];
      } );
  }

  return (
    <div>
      <NovaDisciplina onAddDisciplina={addDisciplinaHandler} />
      <Disciplinas listaDisciplinas={dadosDisciplinas}></Disciplinas>
     
    </div>
  );
}

export default App;
