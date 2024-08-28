import { useDispatch, useSelector } from 'react-redux';
import { laptopSelectorSlicing, addLaptop } from '../Store/reducess/LaptopSlicing'; // Import addLaptop action
import { nanoid } from '@reduxjs/toolkit';
import { useRef } from 'react';

const LapTop = () => {
 

  const price=useRef();
  const cpu=useRef();
  const ram=useRef();
  const hdd=useRef();
  const gen=useRef();



  const laptops = useSelector(laptopSelectorSlicing);

  const dispatch = useDispatch();

  const handleAddLaptop = () => {
    // Ensure you are calling the function correctly
    dispatch(
      addLaptop({
        id: nanoid(), 
        price: price.current.value,
        spec: {
          cpu: cpu.current.value,
          gen: gen.current.value,
          hdd: hdd.current.value,
          ram: ram.current.value,
        },
      })
    );
  };

  return (
    <div>
      {laptops.map((element) => (
        <div key={element.id}>
          <h2>Laptop ID: {element.id}</h2>
          <p>Price: {element.price}</p>
          <p>CPU: {element.spec.cpu}</p>
          <p>Generation: {element.spec.gen}</p>
          <p>HDD: {element.spec.hdd}</p>
          <p>RAM: {element.spec.ram}</p>
        </div>
      ))}
      <div>
        <input ref={price} type="text" placeholder="Enter your Price" />
        <input ref={cpu} type="text" placeholder="Enter your CPU" />
        <input ref={gen} type="text" placeholder="Enter your Generation"/>
        <input ref={hdd} type="text" placeholder="Enter your HDD" />
        <input ref={ram} type="text" placeholder="Enter your Ram" />
      </div>
      <div>
        <button onClick={handleAddLaptop}>Add Laptop</button> 
      </div>
    </div>
  );
};

export default LapTop;
