function createNewUser(){
    let firstName = prompt("Write your first name:", "");
    let lastName = prompt("Write your last name:", "");
    let birthdayStr = prompt("Write your birthday in dd.mm.yyyy:", "");

    let birthdayArr = birthdayStr.split('.');
    let birthday = new Date(birthdayArr[2], birthdayArr[1] - 1, birthdayArr[0]);

    let newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        getLogin: function(){
            return (this.firstName.charAt(0) + this.lastName).toLowerCase();
        },
        getAge: function(){
            let date = new Date();
            let age = date.getFullYear() - this.birthday.getFullYear();
            let monthDiff = date.getMonth() - this.birthday.getMonth(); 
            if (monthDiff < 0 || (monthDiff === 0 && date.getDate() < this.birthday.getDate())) {
                age--;
            }
            return age;
        },
        getPassword: function(){
            return (this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.getFullYear());
        },
    };

    return newUser;
}

let user = createNewUser();
alert("Your login: " + user.getLogin())
alert("Your age: " + user.getAge());
alert("Your password: " + user.getPassword());
