
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectLaptop } from './componds/reducess/LapTopSlicing'
import { addItemToCard, selectcard } from './componds/reducess/cardSlicing';
function App() {
 const laptop=useSelector(selectLaptop);
 const card=useSelector(selectcard);
 console.log(card);
 const dispatch=useDispatch()

let Total=0;
if(Array.isArray(card)){
  card.map((element)=>{
  return Total=Total+(element.count*element.price)
   
  })
  
}
  
 console.log(`total is ${Total}`);
  return (
    <div>
      {laptop.map(({ id, price, ram, cpu }) => (
    <p key={id}>
      RAM: {ram}, CPU: {cpu}, Price: {price}
      <button onClick={()=>dispatch(addItemToCard(price,ram,cpu))}>TO CARD</button>
    
    </p>
  ))}
  <hr/>
  <br/>
  <h3>Card Details</h3>
  <br></br>

  <h2> Total Item Is : {card.length}</h2>
  <h3>Totla Price is : {Total}</h3>

  <h>TEST</h>
      
     
      
    
    </div>
    
  );
}

export default App;
