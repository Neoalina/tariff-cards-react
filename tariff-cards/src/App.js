import Tariff from './components/Tariff';
import './App.css';
import React from 'react';
import blueTheme from './styles/blue-theme.css';
import greenTheme from './styles/green-theme.css';
import redTheme from './styles/red-theme.css';
import blackTheme from './styles/black-theme.css';

const tariffs = [{
  
  price: "300",
  speed: 10,
  theme: {blueTheme}
},
{
  
  price: "450",
  speed: 50,
  theme: {greenTheme}
},
{
  
  price: "550",
  speed: 100,
  theme: {redTheme},
  isSelected: true,
},
{
 
  price: "1000",
  speed: 200,
  theme: {blackTheme}
},
]

function App() {
  return (
    <div className="App">
      {tariffs.map((tariff) =>
      <Tariff title={tariff.title} price={tariff.price} speed={tariff.speed} theme={tariff.theme} isSelected={tariff.isSelected}/>
      )}
      
    </div>
  );
}

export default App;
