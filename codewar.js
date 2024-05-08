// Code Wars Problem 1 Solution
console.log("\nCode Wars Problem 1 Output:");
function alphabetPosition(text) {
    return text
        .toLowerCase()
        .split('')
        .map(char => {
            const code = char.charCodeAt(0) - 96;
            return (code >= 1 && code <= 26) ? code : '';
        })
        .filter(code => code !== '')
        .join(' ');
}

const text1 = "The sunset sets at twelve o' clock.";
console.log(alphabetPosition(text1));

// Code Wars Problem 2 Solution
function sumStr(a, b) {
    // If a is an empty string, set it to 0
    if (a === '') {
        a = '0';
    }
    // If b is an empty string, set it to 0
    if (b === '') {
        b = '0';
    }
    // Return the sum of a and b as a string
    return String(parseInt(a) + parseInt(b));
}

// Example usage:
let a = '123';
let b = '456';
console.log(sumStr(a, b));