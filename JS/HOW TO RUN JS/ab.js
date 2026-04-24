//  function Result(){
//     let person={
//         name:"John"
//     };
//     console.log(person);
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.city);
//     typeof
//     console.log(typeof)
// }
let mixedArray = [1, "Hello",true,{name: "Alice"},[1,2,3]];
console.log(mixedArray[0]);//1
console.log(mixedArray[1]);//Hello
console.log(mixedArray[2]);//true
console.log(mixedArray[3]);//
console.log(mixedArray[4]);

//normal function with no parameters
function greet(){
    console.log("Hello,World!");
}

greet();//Hello, World!

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));

let divide = function(a,b){
    return a/b;
};
console.log(divide(10,2));

let add=function(a,b){
    return a+b;
};
console.log(add(5,7));

let square=x => x*x;
console.log(square(4));

const greetUser=(name)=>{
    console.log(`Hello, ${name}!`);
}
greetUser("Alice");

let newarray = [1,2,3,4,5];
let squaredArray = newarray.map((num)=>num*5);
console.log(squaredArray);

let newArray = Newarray=[5,10,15,20,25];
let squareArray = Newarray.map((num)=>num-5);
console.log(squareArray);

let evenNumbers=[1,2,3,4,5];
let filteredEvenNumbers = evenNumbers.filter(num=> num%2===0);
console.log(filteredEvenNumbers);

let sum=[1,2,3,4,5];
let total= sum.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
console.log(total);

let students =[
    {name: "Alice",marks:85},
    {name: "Bob",marks:92},
    {name: "Charlie", marks:78},
];

let marks= students.map(students=>student.marks);
console.log(marks);

let names= students.map(student=> student.name);
console.log(names);

let topStudents= students.filter (student=> student.marks>80);
console.log(topStudents);

let totalMarks= student.reduce((acc,student)=> acc+ student.marks,0);
console.log(totalMarks);




