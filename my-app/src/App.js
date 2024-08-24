
import './App.css';
import {useSelector}from 'react-redux';


function App() {
  const number=useSelector((Store)=>Store.numberSlicing.number)

  return (
    <div>
      <div>{number}</div>
      
     
      
    </div>
    
  );
}

export default App;
