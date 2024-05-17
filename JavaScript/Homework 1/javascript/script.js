let name = prompt("What is your name?", "");
let years = prompt("How many years are you old?", "");
if(years > 22){
    alert("Welcome, " + name);
}
else{
    if(years >= 18 && years <= 22){
        let result = confirm("Are you sure you want to continue?");
        if(result){
            alert("Welcome, " + name);
        }
        else{
            alert("You are not allowed to visit this website");
        }
    }
    else{
        alert("You are not allowed to visit this website");
    }
}