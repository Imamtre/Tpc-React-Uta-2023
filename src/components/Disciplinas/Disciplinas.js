import { useState } from 'react';

import NotaDisciplina from './NotaDisciplina';
import './Disciplinas.css';
import Card from '../UI/Card3';
import FiltroDisciplina from './FiltroDisciplina';

function Disciplinas(props) {
  const [anoSelecionado, setAnoSelecionado] = useState('2022');

  const mudarSelecao = (ano) => {
    setAnoSelecionado(ano);
  };

  let filtereditens = props.listaDisciplinas.filter(
    (disci) => disci.dataAvalia.getFullYear() === Number(anoSelecionado)
  );

  return (
    <Card className="disciplinas">
      <FiltroDisciplina ano={anoSelecionado} onSelectAno={mudarSelecao} />

      {filtereditens.length === 0
        ? <h2 className='disciplinas-list__fallback'>Não há dados</h2>
        : filtereditens.map((disci) => {
            return (
              <NotaDisciplina
                nomeDisciplina={disci.nomeDisciplina}
                valorNota={disci.valorNota}
                dataAvalia={disci.dataAvalia}
              />
            );
          })}

      {}
    </Card>
  );
}

export default Disciplinas;
