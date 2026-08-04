function calculate(num1, operator, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return "Error: Invalid Number";
    }

    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n2 === 0 ? "Error: Division by Zero" : n1 / n2;
        default:
            return "Error: Invalid Operator";
    }
}

// Test instances
console.log(calculate("10", "+", "5"));  // Outputs: 15
console.log(calculate("20", "*", "3"));  // Outputs: 60
console.log(calculate("10", "/", "0"));  // Outputs: Error: Division by Zero
