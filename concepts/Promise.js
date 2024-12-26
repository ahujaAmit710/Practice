const cart = ["shoes", "pant", "kurta"]
const promise = createOrder(cart)

promise
.then(function (orderId) {
    console.log(orderId)
    return orderId;
})
.catch(function (err) {
    console.log(err.message)
})
.then (function (orderId){
    return ProcceedToPayment(orderId)
})
.catch(function (err) {
    console.log(err.message)
})
.then(function (paymentInfo){
    console.log(paymentInfo)
})
.catch(function (err) {
    console.log(err.message)
})
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = Error(`cart is not valid`);
            reject(err);
        }
        else {
            const orderId = "12345";
            setTimeout(() => {
                resolve(orderId)
            }, 5000);
        }
    });
    return pr;
}

function ProcceedToPayment(orderId) {
    return new Promise(function (resolve, reject){
        resolve(`Payment successful`)
    })
}

function validateCart(cart) {
    return true;
}