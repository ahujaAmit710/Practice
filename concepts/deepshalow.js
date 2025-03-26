const user = { 
    name: 'John', 
    age: 30, 
    city: 'New York', 
    hobbies: {
        key: "Cricket"
    }
}; 

const temp = structuredClone(user); // Deep Copy

temp.name = 'Amit';
temp.hobbies.key = 'Football';

console.log(temp); // { name: 'Amit', age: 30, city: 'New York', hobbies: { key: 'Football' } }
console.log(user); // { name: 'John', age: 30, city: 'New York', hobbies: { key: 'Cricket' } }
