function processData(input) {
    entries = input.split('\r\n');

    entries.forEach(entry => {    
        const [operation, type, name] = entry.split(';');

        // console.log(operation);
        // console.log(type);
        // console.log(name);
        
        if(operation === 'S'){
            if(type === 'M'){           
                let stringArr = name.substr(0, name.length-2).split(/(?=[A-Z])/);
                const stringOutput =  stringArr.join(' ').toLowerCase();
                
                console.log(stringOutput);
            }else{
                stringArr = name.split(/(?=[A-Z])/);
                stringOutput =  stringArr.join(' ').toLowerCase();
                console.log(stringOutput);
            }
        }else if (operation === 'C'){
                let stringArr = name.split(' ');
                let stringOutput = '';
                stringArr.map((arr, i) => {
                    if(i === 0 && type !== 'C'){                   
                        stringOutput += arr;
                    } else {
                        stringOutput += arr.charAt(0).toUpperCase() + arr.substr(1, arr.length);
                    }
                })

                if(type === 'M'){
                stringOutput += '()'
                }
                
                console.log(stringOutput);
        }
    })
} 

// processData("S;M;plasticCup()");
// processData("S;C;LargeSoftwareBook");
// processData("S;V;pictureFrame");

// processData("C;M;white sheet of paper");
// processData("C;C;coffee machine");
// processData("C;V;mobile phone");

// processData("C;M;white sheet of paper S;M;plasticCup() S;C;LargeSoftwareBook ");


