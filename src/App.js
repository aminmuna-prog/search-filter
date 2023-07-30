import JSONDATA from './MOCK_DATA.json';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [searchTerm, setsearchTerm] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={ e =>{
        setsearchTerm(e.target.value)}}/>

      {JSONDATA.filter( val => {
          if(searchTerm === ''){
            return val;
          } else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val;
          }
        }).map((val, key)=>{
        return <div><p>{val.first_name}</p></div>
      })}
    </div>
  );
}

export default App;
