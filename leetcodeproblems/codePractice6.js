function returnNotes() {

    let balanceAmount = 6;
    let returnable = []
    let available = [ 2, 5, 10]
    available.sort((a, b) => b - a)
    let i = 0;
    while (i < available.length) {
        console.log(`Available ${available[i]} balance ${balanceAmount}`)
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

    if(balanceAmount != 0 ){
        console.log(`unable to make returnable`)
    }else{
        console.log(returnable)
    }
    
}
returnNotes()