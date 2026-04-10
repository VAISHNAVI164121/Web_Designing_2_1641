function calculateResult() {
    let numsubjects=parseInt(document.getElementById("numSubjects").value);
    // Check if the input is valid; NaN= not a number; ||=logical OR;
    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects (greater than 0).");
        return; // Stop the function here
    }
    let totalMarks = 0;       // Start total at 0
    let marksArray = [];      // Empty array to store marks
    for (let i = 1; i <= numSubjects; i++) {
        let mark = parseFloat(prompt("Enter marks for Subject " + i + " (out of 100):"));
        
        // Validate each mark
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Invalid marks for Subject " + i + ". Please enter a value between 0 and 100.");
            return;
        }
        marksArray.push(mark);     // Add mark to array
        totalMarks += mark;        // Add mark to total
    }
}