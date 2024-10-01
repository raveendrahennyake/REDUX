
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getPost, selectAll, selectById, selectEntities, selectIds} from './reducess/PostSlice';
import { Decrement, Increament, NumberSelect } from './reducess/NumberSlice';

function App() {
  
  // const number=useSelector(NumberSelect);

  const selectId=useSelector(selectIds);

  
  // console.log(number);

  console.log(selectId);
  const dispatch=useDispatch();
  return (
    <div>
      

      <button onClick={()=>dispatch(Increament("sam",52,"Badulla",))}>INCREASE</button>

      <button style={{marginLeft:"20px"}} onClick={()=>dispatch(Decrement("Deen",20,"Kanddy"))}>DECRESE</button><br></br>
      

      <button style={{marginTop:"20px"}} onClick={()=>dispatch(getPost())}>NEXT</button>

      <div>
        <h1>{selectId}</h1>
      </div>


     
      
    </div>
    
  );
}

export default App;
