// Access Key
// P3aLBB27lAVINn37PNQldpx5L8ajMGFm4_kchZH1Eww
// Secret key
// kqSoqBdI366fUqaLVoCL4HkzqkrWRW3VmtvBcCfDCRk

import React, { useState } from 'react'


function Api() {
    const [valor, setValor] = useState ('');
    const [resultados, setResultados] = useState([]);


    const buscarResultados = async () => {
        const API_KEY = 'P3aLBB27lAVINn37PNQldpx5L8ajMGFm4_kchZH1Eww'
        const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page&orientation=landscape`

       const response = await fetch(URL);
       const data = await response.json();
       setResultados(data.results)
       console.log(data)
    }

  return (
    <div className="App">
    <div className='search__box'>
      <input className='search__box--input' placeholder='Buscar imagenes' onChange={e => setValor(e.target.value)} />
            <button onClick ={()=> buscarResultados()} className='search__box--btn'>Buscar</button>  
            </div> 
            <div className='main__content'>
                <div className='main__content--grid'>
                    {
                        resultados.map((elemento, indice)=>{
                            return (
                            
                                <img key={indice} src={elemento.urls.regular}/>
                            
                            )
                        })
                    }
                </div>

            </div>
    </div>
  );
}

export default Api
