let employee=[];

function addEmployee(){
    let emp={
        name: document.getElementById("name").ariaValueMax,
        id: document.getElementById("id").ariaValueMax,
        salary: Number (document.getElementById("salary").value),
        dept: document.getElementById("dept").value,
    };
    employees.push(emp);

    alert("Employee Added");
}

function displayEmployees(){
    let output="";

    for(let emp of employees){
            output += emp.name +"-$" + emp.salary + "<br>";}
        document.getElementById("output").innerHTML = output;
    
}
// function filterEmployee(){
//     let result =employees.filter(emp=> emp.salary>50000);
//      {
//       output += e.name + " " + e.salary + "<br>";
//     }
  
//   document.getElementById("result").innerHTML = output;
// }
function filterEmployee() {
  let output = "";
  for (let emp of employees) {
    if (emp.salary > 50000) {
      output += emp.name + " " + emp.salary + "<br>";
    }
  }
  document.getElementById("result").innerHTML = output;
}



 function totalSalary(){
    let total= 0;
     for(let emp of employee){
        total += emp.salary;
     }
     document.getElementById("output").innerHTML= "Total Salary: $"+ total;
     "Total Salary"
 }
  
 function avgSalary(){
    let sum = 0;
  for (let emp of employees) {
    sum += emp.salary;
  }
  let avg = sum / employees.length;
  document.getElementById("result").innerHTML = "Average Salary: " + avg;

 }

 function countDept(){
    let deptInput = prompt("Enter Department:");
    let count=0;
     for (let emp of employees) {
    if (emp.dept == d) count++;
  }
  document.getElementById("result").innerHTML =
    "Employees in " + d + ": " + count;
 }

