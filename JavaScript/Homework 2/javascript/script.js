let inputNumber = prompt("Enter your number", "");

if (inputNumber !== 0 && !isNaN(inputNumber)){
    let number = parseInt(inputNumber);
    let tempArr = [];
    let result = false;

    for (let i = 0; i <= number; i++){
        if (i % 5 === 0){
            tempArr.push(i);
            result = true;
        }
    }

    if (result){
        alert(tempArr.join(", "));
    } 
    else{
        alert("Sorry, no numbers");
    }
} 
else{
    alert("Invalid number. Please enter a valid number.");
}