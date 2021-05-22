import React,{Component} from 'react';
import './App.css';





class App extends Component {
  state = {
    array: [],
    arraySteps:[],
    colorKey:[],
    colorSteps:[],
    currentStep:0,
    

  }
  render(){
    return <div className='app'>
      <h1>Hello world</h1>
    </div>
  }
}

export default App;
