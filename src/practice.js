import React,{useState,useEffect} from 'react'

export default function Practice() {
     let date=new Date().toLocaleTimeString()
    const [time,setTime]=useState(date);

      useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
    <div>Time:{time}</div>
  )
}
// let date=new Date(2003,12,14)
// console.log(date)

// let car = {
//   color: "blue",
//   brand: "Audi",
//   start: function() {
//     setTimeout(() => {
//       console.log(this);  // Object { color: "blue", brand: "Audi", start: ƒ() }
//     }, 1000);
//   }
// };

// car.start();

// let par = {
//   color: "blue",
//   brand: "Audis",
//   start: () => {
//     console.log(this); 
//   }
// };

// par.start();


// let myArray = new Array("a", 2, true);
// console.log(Object.getPrototypeOf(myArray));



// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.displayFullName = function() {
//   return this.firstName + " " + this.lastName;
// };

// let person1 = new Person("Venu", "Kohli");
// // let person2 = new Person("Sachin", "Tendulkar");

// console.log(Object.getPrototypeOf(person1));


//console.log(Object.getPrototypeOf(myArray))

// const arr1 = [0, 1, 2, [3, 4]];
// const arr2 = [0, 1, 2, [[[3,4,5,6]]]];

// console.log(arr1.flat()); // [ 0,1,2,3,4 ]
// console.log(arr2.flat(4)); // [0, 1, 2, [3, 4]]
console.log('hello venu!')