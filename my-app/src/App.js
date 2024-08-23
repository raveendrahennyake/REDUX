
import './App.css';
import {  useDispatch, useSelector } from 'react-redux';
import { NUmberDeCrement, NumberIncrement } from './Store/reducers/number';
function App() {
 const number=useSelector((store)=>store.number);

 //change store
const dispatch=useDispatch()

  return (
    <div>{number}
      <div><button onClick={()=>{
        dispatch(
          NumberIncrement()
        )
      }}>INCREMENT</button>
       <button onClick={()=>{
        dispatch(
          NUmberDeCrement()
        )
       }}>DECREMENT</button>
      
      </div>
      
    </div>
   
   
    
  );
}

export default App;
