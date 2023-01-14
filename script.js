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


//A linked list
//Singly link list has only reference ahead of it
//In a doubly linked list, each node has before and after

//Setting head and tail properties to null by leaving it blank and setting it to null.
//You create instances of a constructor function
function LinkedList() {
    this.head = null;
    this.tail = null;
}
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

var node1 = new Node(100, 'node2', null);