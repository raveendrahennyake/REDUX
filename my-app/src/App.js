
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getPost, selectAllpost } from './reducess/PostSlice';


function App() {
  const post=useSelector(selectAllpost);
  console.log(post);
  const dispatch=useDispatch();
 
 

  return (
    <div>
      <h1>HE::OP</h1>
      

      <button onClick={()=>dispatch(getPost())}>NEXT</button>
     
      
    </div>
    
  );
}

export default App;
