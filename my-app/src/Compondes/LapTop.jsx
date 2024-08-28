import { useDispatch, useSelector } from 'react-redux';
import { laptopSelectorSlicing, addLaptop } from '../Store/reducess/LaptopSlicing'; // Import addLaptop action
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';

const LapTop = () => {
  const [price, setprice] = useState('');
  const [cpu, setcpu] = useState('');
  const [gen, setgen] = useState('');
  const [hdd, sethdd] = useState('');
  const [ram, setram] = useState('');

  const laptops = useSelector(laptopSelectorSlicing);

  const dispatch = useDispatch();

  const handleAddLaptop = () => {
    
    dispatch(
      addLaptop({
        id: nanoid(), 
        price: price,
        spec: {
          cpu: cpu,
          gen: gen,
          hdd: hdd,
          ram: ram,
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
        <input
          type="text"
          placeholder="Enter your Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your CPU"
          value={cpu}
          onChange={(e) => setcpu(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Generation"
          value={gen}
          onChange={(e) => setgen(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your HDD"
          value={hdd}
          onChange={(e) => sethdd(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your RAM"
          value={ram}
          onChange={(e) => setram(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddLaptop}>Add Laptop</button>
      </div>
    </div>
  );
};

export default LapTop;
