function getAccountDetails(acctData, balance = {}, user = '', sortBy = '', sortDirection = '') {
  var accNum = [];
  var count = 0;
  var arr = [];

  for (const [key, value] of Object.entries(balance)) {
    arr.push({ date: key, value: value });
  }

  acctData.forEach((accD, index = 0) => {
    if (user) {
      if (accD.user == user) {
        accNum.push(accD.acctNum)
      }
    }
    if (sortBy) {
      if (sortBy == 'acctNum') {
        accNum.sort();
      } else if (sortBy == 'balance') {
        for (var i = 0; i < arr.length; i++) {
          if (accD.acctNum == arr[i].date) {
            Object.assign(accD, { value: arr[i].value })
          }
        }
        count++;
        if (acctData.length == count) {
          acctData.sort((a, b) => {
            return a.value - b.value;
          });
          let accDetail = acctData.filter((data) => {
            return data.user == user
          });
          let newVal = [];
          for (let j = 0; j < accDetail.length; j++) {
            newVal.push(accDetail[j].acctNum)
          }
          accNum = newVal;
        }
      }
    }

    if (sortDirection) {
      if (sortDirection == 'desc') {
        accNum.reverse();
      } else if (sortDirection == 'asc') {

      }
    }
  })
  console.log(accNum);
}

balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

acctData = [
  {
    "acctNum": "AAA - 1234",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 5231",
    "user": "Bob"
  },
  {
    "acctNum": "AAA - 9921",
    "user": "Alice"
  },
  {
    "acctNum": "AAA - 8191",
    "user": "Alice"
  }
];

getAccountDetails(acctData, balance, 'Alice', 'balance', 'desc');


// This is a separate JavaScript coding exercise with no UI interaction.
// 1. Given values for acctData and balances below, write a function that returns only an array of account
// numbers, and accepts the following optional parameters:
// - user
// - sortBy (accepts "acctNum" or "balance")
// - sortDirection (accepts "asc" or "desc"; default to asc)
// 2. Execute your function and output the results as an array in console log for the following scenarios:
// a) filtered by Bob
// b) filtered by Charlie
// c) sorted by acctNum
// d) filtered by Alice; sorted by balance ascending
