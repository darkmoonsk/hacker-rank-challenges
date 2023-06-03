const str = "We promptly judged antique ivory buckles for the prize";

function pangrams(s) {
    let isNotPangram = false;
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const stringUpperCase = s.toUpperCase();

    if(s.length > 1000) return;

    for (let i = 0; i < alphabet.length; i++) {
        if (!stringUpperCase.includes(alphabet[i])) {
            isNotPangram = true;
            break;
        }
    }
    
   return isNotPangram? "not pangram" : "pangram";

}

console.log(pangrams(str));