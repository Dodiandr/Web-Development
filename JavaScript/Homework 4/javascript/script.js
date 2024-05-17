function createNewUser(){
    let firstName = prompt("Write your first name:", "");
    let lastName = prompt("Write your last name:", "");

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        getLogin: function(){
            return (this.firstName.charAt(0) + this.lastName).toLowerCase();
        }
    }

    return newUser;
}

let user = createNewUser();
alert(user.getLogin());