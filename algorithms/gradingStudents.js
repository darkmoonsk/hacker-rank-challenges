const grades = [ 73, 67, 38, 33 ]
const test = [38]

function gradingStudents(grades) {
    const result = []

    grades.forEach(grade => {
        if (grade < 38){
            result.push(grade)
        }else {
            const nextMultipleOfFive = Math.ceil(grade / 5) * 5
            
            if (nextMultipleOfFive - grade < 3){
                result.push(nextMultipleOfFive);
            } else {
                result.push(grade);
            }
        }
    });

    return result;
}

const result = gradingStudents(grades);

console.log(result.join('\n') + '\n');