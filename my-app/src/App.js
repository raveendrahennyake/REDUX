
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getPost, selectAllpost } from './reducess/PostSlice';
import { Decrement, Increament, NumberSelect } from './reducess/NumberSlice';

function App() {
  const post=useSelector(selectAllpost);
  const number=useSelector(NumberSelect);

  console.log(post);
  console.log(number);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>{number}</h1>

      <button onClick={()=>dispatch(Increament("sam",52,"Badulla",))}>INCREASE</button>

      <button style={{marginLeft:"20px"}} onClick={()=>dispatch(Decrement("Deen",20,"Kanddy"))}>DECRESE</button><br></br>
      

      <button style={{marginTop:"20px"}} onClick={()=>dispatch(getPost())}>NEXT</button>


     
      
    </div>
    
  );
}

export default App;
