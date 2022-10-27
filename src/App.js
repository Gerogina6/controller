// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{ useState } from 'react';

const App = () => {
  const [temperatureValue,setTemperatureValue] = useState(10)
  const [temperatureColor,setTemperatureColor] = useState('cold')

  const increaseTemperature = ()=>{
    if(temperatureValue > 29){
      return
    }else{
      const newTemperature = temperatureValue + 1
      setTemperatureValue(newTemperature)

      if(newTemperature >= 15){
        setTemperatureColor('hot')
      }
    }
  }
  
  const decreaseTemperature = ()=>{
    if(temperatureValue < -29){
      return
    }else{
      const newTemperature = temperatureValue - 1
      setTemperatureValue(newTemperature)
  
      if(newTemperature < 15){
        setTemperatureColor('cold')
      }
    }
  }
	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${temperatureColor}`}>{ temperatureValue }°C</div>
			</div>
			<div className='button-container'>
				<button onClick={increaseTemperature}>+</button>
				<button onClick={decreaseTemperature}>-</button>
			</div>
		</div>
	);
};

export default App;