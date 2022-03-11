import React, { useEffect, useState } from 'react';
import '../src/css/style.css';

/// https://sujeitoprogramador.com/rn-api/?api=posts



function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        })
    }

    loadApi();

  }, []);

  return (
    <div className='container'>
      <header>React Nutri</header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className='titulo'>{item.titulo}</strong>

            <img className='capa' src={item.capa} alt={item.titulo}></img>

            <p className='subtitulo'>
              {item.subtitulo}
            </p>
            <a className='botao' href='/#'>Acessar</a>

          </article>
        )
      })}
    </div>
  );
}

export default App;
