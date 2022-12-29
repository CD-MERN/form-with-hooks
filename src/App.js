import React , { useState} from 'react'
import './App.css';
import Data from './components/Data';
import Input from './components/Input';
function App() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
  })
  return (
    <div className="App">
        <Input state={state} setState={setState}/>
        <Data state={state} />
    </div>
  );
}

export default App;
