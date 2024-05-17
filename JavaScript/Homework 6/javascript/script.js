function filterBy(arr, type){
    if (type === 'number'){
        return arr.filter(item => typeof item !== 'number' || isNaN(item));
    } 
    if (type === 'string'){
        return arr.filter(item => typeof item !== 'string');
    }
    else{
        return [];
    }
}

let userArray = prompt("Enter array elements separated by commas:", "").split(',');

userArray = userArray.map(item => {
    if (item === "true") return true;
    if (item === "false") return false;
    if (item === "null") return null;
    if (!isNaN(item)) return parseFloat(item);
    return item;
});

let arrayTypeFilter = prompt("Enter the data type to filter:", "");

alert(filterBy(userArray, arrayTypeFilter));