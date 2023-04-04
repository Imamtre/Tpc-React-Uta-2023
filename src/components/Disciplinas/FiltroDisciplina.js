import estilos from './FiltroDisciplina.module.css';

const FiltroDisciplina = (props) => {

  const selectHandler = (event) => {
    props.onSelectAno(event.target.value);
  }

  return (
    <div className={estilos['disciplinas-filter']}>
      <div className={estilos['disciplinas-filter__control']}>
      <label>Filtrar por ano</label>
      <select value={props.ano} onChange={selectHandler} >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
      </div>
    </div>
  );
};

export default FiltroDisciplina;
