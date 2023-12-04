
/*
let user = {
  name: 'warren',
  age: 31,
  'likes birds': true,
  'is maried':true,
}

//adding item to object
user['is a dad'] = true;
user.daughterCount = 1;

//calling or displaying the  object item
console.log(user.age);
console.log(user['likes birds']);
console.log(user['is maried']);

console.log(user.daughterCount);

const key = 'is a dad';// assgning the key name/ for flexibility
console.log(user[key]);

//let the name be inputed
const keyName = prompt('what do you want to do with  the user','name');
console.log(user[keyName]);
*/

/*
// asking user for input nae for objects
//[] bracket can use name from user;
const fruit = prompt('enter name of fruit', 'apple')
const bag = {
  [fruit]: 5, // take property name from the fruit variable
  [fruit + 'Computer']: 10,
}
console.log(bag.apple);
console.log(bag.appleComputer);
*/


//Property value shorthand

function makeUser(name, age){
  return {
    name: name,
    age: age,
    //other properties
  };
}

const user = makeUser('warren', 31);
console.log(user.name)
console.log(typeof(user.age));
console.log(user['name']);


//Property existence test, “in” operator
//checking if the propery is there or not

const users = {
  name: 'Warren',
  age: 31,
  test:undefined,
};
console.log(users.noSuchProperty === undefined);//returns true

//There’s also a special operator "in" for that.\\
console.log('age' in users) // true user.age is there
console.log('blabla' in users) // false user.blahbla not exist

//via assignment
const keyAge = 'age';
console.log(keyAge in users); //true user.age

//some times undefines works fine but in some case its not and 'in' works correctly.. like if the property  value is undefined

console.log(user.test); // return undefined; event it exist bacuse of its value is undefined
console.log('test' in users) // will return true now this is perfect suited for this kind of situation
