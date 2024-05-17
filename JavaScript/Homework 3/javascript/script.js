let a = +prompt("Enter first number:","");
let b = +prompt("Enter second number:", "");
let operation = prompt("Choose operation with numbers", "");

function calculateResult(a, b, operation){
    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
}
alert(calculateResult(a, b, operation));