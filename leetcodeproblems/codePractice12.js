let array =[55, 60, 75, 80, 85, 90, 95, 100];
let object ={}
for (let i = 0; i < array.length; i++) {          
        if(array[i] < 60 ){

            if ('0-60' in object) {
                object['0-60'] += 1; // Add value if key exists
              } else {
                object['0-60'] = (object['0-60'] || 0) + 1;
              }
        }
        else if (array[i] >  60 && array[i] <= 80){
         
            if ('61-80' in object) {
                object['61-80'] += 1; // Add value if key exists
              } else {
                object['61-80'] = (object['61-80'] || 0) + 1;
              }
        }
        else if(array[i] >= 81 && array[i] < 100){          

            if ('81-100' in object) {
                object['81-100'] += 1; // Add value if key exists
              } else {
                object['81-100'] = (object['81-100'] || 0) + 1;
              }
        }
       
}
console.log(object)