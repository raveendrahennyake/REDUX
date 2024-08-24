
import './App.css';
import {useDispatch, useSelector}from 'react-redux';
import { decrement, increment } from './Store/reducess/NumberSlicing';
function App() {
  const number=useSelector((Store)=>Store.numberSlicing.number)
  const dispatch=useDispatch();
  return (
    <div>
      <div><h>{number}</h></div>
      <div>
       <button onClick={()=>dispatch(increment(10))}>INCREASE</button>
        <button onClick={()=>dispatch(decrement(2))}>DECREMENT</button>

      </div>
    
      
    </div>
    
  );
}

export default App;
