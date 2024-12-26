let data=[
    {name:"Amit", designation:"Software Engineer" },
    {name:"Rakesh", designation:"Software Engineer" },
]

function getData(){
    setTimeout(() => {
            data.forEach(element => {
                console.log(element.name)
            });
    }, 1000);
}

function  createData() {
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        data.push({name:"Tej", designation : "Project Manager"})
        let error =true;
        if(!error){
            resolve()
        }else{
            reject("Something went wrong")
        }
    }, 2000);
   })
   
}

createData().then(getData).catch(error => console.log(error))