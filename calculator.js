function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b; // Addition
        case '-':
            return a - b; // Subtraction
        case '*':
            return a * b; // Multiplication
        case '/':
            if (b === 0) {
                return "Cannot divide by zero"; // Prevent division by zero
            }
            return a / b; // Division
        default:
            return "Invalid operator"; // Default case if operator is not recognized
    }
}

// Test the calculator
console.log(calculator(10, 5, '+')); // Output: 15
console.log(calculator(10, 5, '-')); // Output: 5
console.log(calculator(10, 0, '/')); // Output: "Cannot divide by zero"
console.log(calculator(10, 5, 'x')); // Output: "Invalid operator"
