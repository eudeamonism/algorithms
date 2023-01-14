//Constructors and Prototypes
//No arrow functions with these constructors

function User(firstName, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
}

var user1 = new User('john', 'smith', '26', 'male');

var user200 = new User('Bob', 'Rob', '25', 'female');

User.prototype.emailDomain = '@facebook.com';
User.prototype.scoobyDoo = function() {
    return this.firstName + ' ' + this.lastName + 'We hate arrow funcitons!'
};
