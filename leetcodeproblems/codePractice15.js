
// ***********Closure*************** 
// function  one(params1) {
    
//     return function two(params2) {
//             console.log(`Hello ${params1 +" "+ params2}`)
//     }
// }

// one("Amit") ("Ahuja")


//*********Object destructure */
// const user ={
//     name: "Amit",
//     lastName: "Ahuja",
//     address :{
//         city:"Veraval",
//         district :"Gir-Somnath"
//     }
// }

// const { name, lastName, address : address} =user

// console.log(address)

// let array =[{name: "Amit",lastName: "Ahuja"},
//               {name: "Akash",lastName: "Ahuja"},
//               {name: "Ankit",lastName: "Ahuja"}];


// array =[{name:"Sagar",lastName:"Joshi"},...array]

// console.log(array)

let userDetails ={
    name:"Amit",
    age:"28",
  
}

let printDetails=function(){
    console.log(`${this.name} ${this.age}`)
}

printDetails.call(userDetails)

let userDetails2 ={
    name:"Akash",
    age:"28",
}

printDetails.call(userDetails2)