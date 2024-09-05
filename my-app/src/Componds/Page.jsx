import React from 'react'

const Page = () => {

    //Spread Opertor and Sling 

    //Spread
    //Object
    //Arraw

    //Array
    //Combine Array

    const firstArray=[10,12,14];
    const SecondArray=[16,18,20];

    const combineArray=[...firstArray,...SecondArray];
    console.log(combineArray);


    //Clone Array

    const ThirdArray=[20,30,40,50];
    const cloneNewArray=[...ThirdArray];
    console.log(cloneNewArray);

    //Explat Arrat

    const array1 = [1, 2, 3];
    const array2 = [...array1, 4, 5, 6];  // Expands elements of array1
    console.log(array2);  // Output: [1, 2, 3, 4, 5, 6]


    //Object use spread Opertors

    // Merging objects
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Cloning an object
const originalObject = { e: 5, f: 6 };
const clonedObject = { ...originalObject };
console.log(clonedObject); // Output: { e: 5, f: 6 }


//Slicing 

const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(1, 4); // Extract elements from index 1 to 3
console.log(slicedArray);  // Output: [2, 3, 4]
console.log(array);        // Original array remains unchanged: [1, 2, 3, 4, 5]


const arrays = [1, 2, 3, 4, 5, 6];
const updatedArray = [...arrays.slice(0, 2), 99, ...arrays.slice(3)];
console.log(updatedArray);  // Output: [1, 2, 99, 4, 5, 6]




const arrays1 = [4, 5, 6, 7, 8, 9, 10];

// Changing the element at index 2 (which is 6) to a new value, let's say 99
const updatedArrays = [
  ...arrays1.slice(0, 2),  // Spread the elements before index 2
  99,                    // New value at index 2
  ...arrays1.slice(3)       // Spread the elements after index 2
];

console.log(updatedArrays); // Output: [4, 5, 99, 7, 8, 9, 10]


const documents=[55,66,77,99,33];

const NewDocuments=[...documents.slice(0,3),88,...documents.slice(4)];
console.log(NewDocuments);

const NewNames=[77,88,99,44,48];

const updateNewName=[...NewNames.slice(0,3),100,...NewNames.slice(4)];
console.log(updateNewName);






   
    









  return (
    <div>


      
    </div>
  )
}

export default Page
