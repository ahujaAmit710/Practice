// let a=[1,20,100,30,50];
// let maxNumber =0;
// a.forEach(element => {


//     if(element > maxNumber){
//         maxNumber =element
//     }
// });
// console.log(`Max Number ${maxNumber}`)


function returnNotes() {
    let paidAmount = 600;
    let payableAmount = 575;
    let balanceAmount = paidAmount - payableAmount;
    let returnable = []
    let available = [1, 2, 5, 10]
    available.sort((a, b) => b - a)

    let i = 0;

    while (i < available.length) {
        if (available[i] <= balanceAmount) {
            balanceAmount = balanceAmount - available[i]
            returnable.push(available[i])
            // Reset the loop
            i = 0;
            continue
        }
        else {
            i++;
        }  
    }

    //from chatgpt

    // let paidAmount = 600;
    // let payableAmount = 575;
    // let balanceAmount = paidAmount - payableAmount;
    // let returnable = [];
    // let available = [1, 2, 5, 10].sort((a, b) => b - a); // Sort in descending order

    // for (let i = 0; i < available.length; i++) {
    //     while (available[i] <= balanceAmount) {
    //         balanceAmount -= available[i];
    //         returnable.push(available[i]);
    //     }
    //     if (balanceAmount === 0) break; // Exit early if no balance remains
    // }

    console.log(returnable)
}


returnNotes()