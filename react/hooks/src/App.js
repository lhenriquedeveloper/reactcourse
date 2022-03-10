//useState
//useEffect
//useMemo
//useCallback

import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  //useStates - States
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  //useEffect
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  //useCallback e useMemo
  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [tarefas, input]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);




  return (
    <div>
      <ul>{tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
      ))}</ul>
      <br />
      <strong>Você tem {totalTarefas} tarefas!</strong><br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;