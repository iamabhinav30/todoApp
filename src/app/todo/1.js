// Print the corresponding  on the right of each element within the array, if no larger element is present on the right print -1
// [1,2,25,3,42,6]
function largestOnRight(arr) {
  debugger;
  let arr1 = arr;
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] < arr[j]) {
        console.log(arr[i] + ' : ' + arr[j]);
        break;
      } else {
        console.log(arr[i] + ' : -1');
        break;
      }
    }
  }
}

largestOnRight([1, 2, 25, 3, 42, 6]);

function Education() {
  this.education = "B.tech";
}

function main() {
  Person = new Education();
  Person.name = "Michael";
  Person.surname = "test";
  var Person;
  Person.residence = "Bangalore";
  Person.age = 23;
  Object.freeze(Person);
  console.log(delete Person.name);

  for (const item in Person) {
    console.log(item);
  }
}
