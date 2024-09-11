import React, { useState } from 'react';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import  style  from './App.module.scss';
import  Cronometro  from '../Components/Cronometro';
import { ITarefa } from '../Components/types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada:ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id == tarefaSelecionada.id ? true : false 
    })));
  }

  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Lista 
     tarefas={tarefas}
     selecionaTarefa = {selecionaTarefa}
     />
     <Cronometro />
    </div>
  );
}

export default App;
