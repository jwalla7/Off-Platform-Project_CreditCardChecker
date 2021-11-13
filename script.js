


// GET Array


// TEST FUNCTION Test Arrays
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4,];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// FUNCTION Validate Array
console.log(`Total arr index: ${mystery5.length}`)
console.log(`Index integers: ${mystery5}`)

const validateCred = arr => {
  let arrPart1 = []; 
  let arrPart2 = [];
  let finalArr = [];
  console.log('Start every other for-loop iteration at index 16...')
  for (let i = arr.length - 1; i >= 0; i-= 2) {
    console.log(arr[i])
    arrPart1.push(arr[i])
  }
  console.log(`Completed - first iteration: ${arrPart1}`)
  console.log('Start ever other for-loop interation at index 15...')
  for (let j = arr.length - 2; j >= 0; j-=2) {
    console.log(arr[j])
    arrPart2.push(arr[j])
  }
  console.log(`Completed - second iteration: ${arrPart2}`)
  console.log(`Start multiplying second interation index integers by 2, then subtract each integer greater than 9 by 9...`)
  let arrPart3 = arrPart2.map(num => {
    num *= 2
    console.log(`Num: ${num}`)
    if (num > 9) {
      num -= 9
      console.log(`-9: ${num}`)
    } 
    return num
  }) 
  console.log(`Completed - ${arrPart3}`)
  console.log(`Combining the first and second iteration index integers...`)
  finalArr = [].concat(arrPart1, arrPart3)
  console.log(`Completed - ${finalArr}`)
  console.log(`Start adding all index integers...`)
  let finalArray = finalArr.reduce((x, y) => x + y)
  console.log(`Completed - Sum of array = ${finalArray}`)
  console.log(`Finding modulo 10 of sum...`)
  
  let validate = finalArray %= 10
  if (finalArray === 0) {
      return 'valid'
    } else {
        return 'invalid'
    }
}

console.log(validateCred(mystery5)) 








// REQUEST API