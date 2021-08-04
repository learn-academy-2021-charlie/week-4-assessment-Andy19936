// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { pseudoRandomBytes } = require("crypto")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// 


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

//pseudo
// make my function going with shuffleMe
// probably going to use math.random somehow and iteration  
// use pop to remove the first index and store it in a new var
// use map to randomize new var
//scratch that map doesnt like randomizing things looking up fisher yates for loop method
// got scared only saw a return of 1 item in the array chainf my method from shift to slice
// sweet gangs all here 
// now the fun part lets make a test.. thinking im going to use .include perhaps
// going to make two test one that ensures all four colors by using sort first to de randomize
// not sure how to test if it has been randomized but i can compare it to its starting point to make sure at the very least the first index has been removed
// feel very meh about this test what wouldve been a better way?

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.

const shuffleMe = (arr) =>{
    let shiftedArr = arr.slice(1)
    for( let i = shiftedArr.length-1; i>0; i--){
        let j = Math.floor( Math.random()* (i+1));
        [shiftedArr[i],shiftedArr[j]] = [shiftedArr[j], shiftedArr[i]];
    }
    return shiftedArr
}
console.log(shuffleMe(colors1))

describe("The shuffleMe function.",()=>{
    test("takes an array and returns a new array with the first index of the old array removed and a randomized order",() => {
        expect(shuffleMe(colors1).sort()).toEqual(["blue", "green","pink", "yellow"])
        expect(shuffleMe(colors1)).not.toEqual(colors1)
        expect(shuffleMe(colors2).sort()).toEqual(["aquamarine", "indigo","ochre","periwinkle",  "saffron"])
        expect(shuffleMe(colors2)).not.toEqual(colors2)


    })
})
// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// pseudo
// a couple of ways we can go about this we can get really sloppy with sort pop slice and concat🤔
// lets find a cooler way found math.min and math.max not sure if its cooler but its someething i have not worked with and might be worth checking out
// learned a bit more about the spread operator very cool nice easy readible code too sweet 
// make my function max/min
// use Math.min to pull my lowest num and make a var to hold my value
// use Math.max to pull my highest num and make a var to hold my value
// return my vars inside of an array 🤙🏼 


// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// b) Create the function that makes the test pass.
// const firstAndLast = (arr) =>{

const getMinMax = (arr) =>{
    min = Math.min(...arr),
    max = Math.max(...arr);
     return [min,max]
    
}
console.log(getMinMax(nums1))

describe("The getMinMax function.",()=>{
    test("takes an array and returns a new array with the highest and lowest values of the array",() => {
        expect(getMinMax(nums1)).toEqual([-8, 90])
        expect(getMinMax(nums2)).toEqual([5, 109])
    })
})
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments
// a) Create a test with an expect statement using the variables provided.

//pseudo
//make my function going with merger
//wanting to concat my arrays and store them as one var
//create a new var with a filter over the array
//return my new var  🤞🏼
//had to play with the spread opp for a bit was trying to concat by doing mergedArr= [arr,...arr] gave up and went with old faithful.concat got the stretch challenge done but still feel defeated by not being able to concat with my spread opp 

 


var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

// const merger = (arr1,arr2) =>{
//   let mergedArr = arr1.concat(arr2)
//   let newArr = mergedArr.filter(function(value, index){
//       return mergedArr.indexOf(value) == index
//   }) 
//   return newArr
// }

const merger = (arr1, ...arr) =>{
    let mergedArr = arr1.concat(...arr)
    let newArr = mergedArr.filter(function(value, index){
        return mergedArr.indexOf(value) == index
    }) 
    return newArr
}  

console.log(merger(testArray1, testArray2, [9, 8, 9 ,6]))

describe("The merger function.",()=>{
    test("takes two array and returns a new array with no duplicates",() => {
        expect(merger(testArray1,testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})