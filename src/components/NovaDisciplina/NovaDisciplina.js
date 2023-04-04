import './NovaDisciplina.css';
import DisciplinaForm  from './DisciplinaForm';


const NovaDisciplina = (props) => {

 const guardarDisciplina = (disci) => {
  props.onAddDisciplina(disci)
  console.log(disci);
 }

  return (
    <div className='new-disciplina'>
      <DisciplinaForm onGuardarDisciplina={ guardarDisciplina } />
    </div>
  );
};

export default NovaDisciplina;
