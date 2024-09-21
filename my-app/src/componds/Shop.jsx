import { produce } from 'immer'
import React, { useState } from 'react'


const Shop = () => {}
    // const arr=[1,2,4,5,6,7,87];

    // const obj1={
    //     name:"sam",
    //     city:"badulla",
    //     age:25
    // }
    // const NewObj1={...obj1}

    //  const NewArray={...obj1};

    //  const NewArraySling=arr.slice(0,3);

    //  const NewSlicing=[...arr.slice(0,2),3,...arr.slice(3)];
    // //  console.log(NewArraySling);
    // // console.log(NewArray)

    // // console.log(NewArray);
    // console.log(NewSlicing);

    // const NewDetails={
    //   name:"sam",
    //   age:25,
    //   city:"badulla",
    //   country:"srilanka",
    //   address:{
    //     address1:"srilanka",
    //     address2:"kenya"
    //   }

    // }

    // const data={...NewDetails}

    // data.age=30;
    // data.fullname="deen sam"

    // console.log(data);

    // let NewData={...NewDetails,address:{...NewDetails.address,address1:"sawww"}};
    // console.log(NewData);
   

    // let newcountry={...NewDetails,country:"kenya"};
    // console.log(newcountry); 


    //Emma library

    // let NewDocuments=produce(NewDetails,(copy)=>{
    //   copy.address.address1="EEEEEEEE";
     

    // })
    // console.log(NewDocuments);

  // const Array=[1,2,3,4,5,6,7,8,9];

  // let NewArray=produce(Array,(copy)=>{
  //   copy[0]=100;

  // })
  // console.log(NewArray);

  //How to Use Redux in React (state Manage);

//   const [Test,SetTest]=useState({...NewDetails});

//   const HandlingClick=()=>{
//     SetTest(produce((copy)=>{
//       copy.age=1000;

//     }))
 

//   }
//   console.log(Test);

  
//   return (
//     <div>
//       <button onClick={HandlingClick}>NEXT</button>

        
      
//     </div>
//   )
// }

// export default Shop
