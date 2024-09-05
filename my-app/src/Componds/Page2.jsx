import { produce } from 'immer';
import React, { useState } from 'react';

const details = {
  names: "sam",
  age: 25,
  city: "kandy",
};

const Page2 = () => {
  const [test, setTest] = useState({ ...details });

  const Handling = () => {
    setTest(produce(test, (copy) => {
      copy.age = 100; // Updating the age to 100
    }));
  };

  return (
    <div>
      <button onClick={Handling}>Update Age</button> {/* Button now has text */}
      <div>
        <p>Name: {test.names}</p>
        <p>Age: {test.age}</p>
        <p>City: {test.city}</p>
      </div>
    </div>
  );
};

export default Page2;
