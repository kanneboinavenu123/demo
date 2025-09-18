// export default function Register(){
// const Register=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("please register");
//         resolve("successfull");
//         },5000)
//     })
// }
// const Login=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("please Login");
//         resolve("Login Completed");
//         },5000)
//     })
// }
// const ThankYou=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log("Thank you");
//         resolve("bye bye");
//         },5000)
//     })
// }
// Register().then(Login).then(ThankYou).then((data)=>{console.log(data)})
// return(
//     <div>welcome</div>
// )
// }

const addTwoPromises=()=> async function (promise1, promise2) {
  // Wait for both promises to resolve
  const [val1, val2] = await Promise.all([promise1, promise2]);
  
  // Return the sum
  return val1 + val2;
};

// Example usage
addTwoPromises(
  new Promise((reject) => setTimeout(() => reject("ok"), 1000)),
  new Promise((reject) => setTimeout(() => reject("ok"), 2000))
).then((result) => {
  console.log(result); // 7 (after 2 seconds)
});
