let students = [
    {name: "Amit", marks:[25,50,60,80]},
    {name: "Rakesh", marks:[25,60,60,80]},
    {name: "Rohit", marks:[25,40,60,90]},
    {name: "Sagar", marks:[25,70,60,100]},
    {name: "Jignesh", marks:[35,50,60,80]},
    {name: "Akash", marks:[25,80,60,80]}
]
    
for (let i = 0; i < students.length; i++) {
        let totalMarks=0
        for(let j= 0; j< students[i].marks.length; j++){
                
            totalMarks += students[i].marks[j]
        }
        students[i]["totalMarks"] = totalMarks;
                
  }

 
students = students.sort((a, b) => b.totalMarks - a.totalMarks); 
console.log(students.slice(0,3))

