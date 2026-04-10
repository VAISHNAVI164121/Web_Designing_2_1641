function calculateResult(){
    let subjects = Number (document.getElementById("subject").value);
    let total= 0;

    for(let i= 1; i<=subjects; i++){
        let marks = Number(prompt("Enter marks for subjects" + i));
        total += marks;
    }
    let average = total / subjects;
    let grade;
    let result;

    if(average>= 90){
        grade="A";
        result="Pass";
    } else{
        grade="F";
        result="Fail";
    }
    document.getElementById("output").innerHTML =
        "Total Marks: "+ total + "<br>" +
        "Average Marks" + average + "<br>" +
        "Grade: " + grade +"<br>" +
        "Result: " + result

    
}