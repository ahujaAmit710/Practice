// class GyroJs {
//     setGyroPosition(pos) {
//         if (pos === null || typeof pos === 'undefined') {
//             throw new Error('The position must be defined');
//         }
//         this.pos = pos;
//     }
//     constructor() {
//         const gyroscopePosition = NativeModules.MyGyroModule.gyroPosition();
//         this.setGyroPosition(gyroscopePosition);
//     }
// }


//rest
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4]

// //spread

// const add = (a, b, c) => a + b + c;
// const numbers = [1, 2, 3];
// console.log(add(...numbers)); // Output: 6

let user ={
    name:"Amit",
    lastName:"Ahuja",
    designation:"Software engineer"
}

//const name={...user}


// console.log(`name object value ${JSON.stringify( name)}`)
// console.log(`user object value ${JSON.stringify(user)}`)

const {name,...rest } =user
console.log(rest)