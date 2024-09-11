import React, { useState } from 'react';
import Formulario from '../Components/Formulario';
import Lista from '../Components/Lista';
import  style  from './App.module.scss';
import  Cronometro  from '../Components/Cronometro';
import { ITarefa } from '../Components/types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas}/>
     <Lista tarefas={tarefas}/>
     <Cronometro />
    </div>
  );
}

export default App;
