
import './App.css';
import {useDispatch, useSelector}from 'react-redux';
import { NumberSlicingSelector, decrement, increment } from './Store/reducess/NumberSlicing';
import LapTop from './Compondes/LapTop';





function App() {

  const number=useSelector(NumberSlicingSelector);
  // console.log(number);

  const dispatch=useDispatch();

  // const price=useRef()
  // const cpu=useRef()
  // const hdd=useRef()
  // const gen=useRef()

 


  return (
    <div>
      <div><h>{number.number}</h></div>

      <div>
       <button onClick={()=>dispatch(increment(10))}>INCREASE</button>
        <button onClick={()=>dispatch(decrement(2))}>DECREMENT</button>

      </div>
              <div>
               <LapTop/>
                
              </div>


      <div>
      

        {/* <button onClick={()=>dispatch1()}>LaptopIncrease</button>
        <button onClick={()=>dispatch1()}>LaptopDecrease</button> */}
      </div>
    
      
    </div>
    
  );
}

export default App;
