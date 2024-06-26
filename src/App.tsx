import { useContext } from 'react';
import './App.css';
// import Display from './Components/Display';
// import Button from './Components/Button';
// import Dashboard from './Pages/Dashboard';

function App({children} : any) {
  // const [value, setValue] = useState(0);

  // const handleSetValue = () => {
  //   setValue(value+1)
  // }


  return (
    <div className="App">
      <h1> Welcome to the application </h1>

      {children}
    </div>  
  );
}

export default App;
