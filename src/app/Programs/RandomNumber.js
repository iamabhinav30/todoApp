// Write a function to do the following:
// 1) Generate 50 random numbers between 1 and 500
// 2) All of these 50 numbers must be unique

function randomUniqueNumbers() {
  const nums = new Set();
  while (nums.size !== 50) {
    nums.add(Math.floor(Math.random() * 500) + 1);
  }

  console.log([...nums]);
}

randomUniqueNumbers();
