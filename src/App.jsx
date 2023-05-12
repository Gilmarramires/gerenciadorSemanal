import { useEffect, useState } from 'react';
import './App.css'

function App() {
  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState({ Tarefa: '', Horario: '', Dia: '', Concluida: false });

  useEffect(() => {
    setLista([]);
  }, []);

  return (
    <div className="container">
      <h2 className="titulo">Gerenciador de tarefas semanal</h2>
      <input className="tarefa" value={novoItem.Tarefa} onChange={value => setNovoItem({...novoItem, Tarefa: value.target.value})} type='text' />
      <select className="turno" value={novoItem.Horario} onChange={value => setNovoItem({...novoItem, Horario: value.target.value})}>
        <option value="">Selecionar turno</option>
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>
      <select className="dia" value={novoItem.Dia} onChange={value => setNovoItem({...novoItem, Dia: value.target.value})}>
        <option value="">Dia da semana</option>
        <option value="Segunda-feira">Segunda-feira</option>
        <option value="Terca-feira">Terça-feira</option>
        <option value="Quarta-feira">Quarta-feira</option>
        <option value="Quinta-feira">Quinta-feira</option>
        <option value="Sexta-feira">Sexta-feira</option>
      </select>
      <button className="criar" onClick={() => adicionarNovoItem()}>Criar tarefa</button>
      <ul className="list">
        {lista.map((item, index) => (
          <li className="list-item" key={index}>
            <li key={index}>
              <input className="check"
                type="checkbox"
                checked={item.Concluida}
                onChange={() => feito(index)}
              />  
            </li>
            {item.Tarefa} - {item.Horario} - {item.Dia}
            <button className="deletar" onClick={() => deletarItem(index)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function adicionarNovoItem() {
    if (!novoItem.Tarefa || !novoItem.Horario || !novoItem.Dia) {
      return;
    }

    setLista([...lista, novoItem]);
    setNovoItem({ Tarefa: '', Horario: '', Dia: '', Concluida: false });
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }

  function feito(index) {
    let tmpArray = [...lista];
    tmpArray[index] = { ...tmpArray[index], Concluida: !tmpArray[index].Concluida};
    setLista(tmpArray);
  }
};


export default App
