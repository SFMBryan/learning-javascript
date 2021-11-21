// const items = [
//     { name: 'Bike',     price: 100 },
//     { name: 'TV',       price: 200 },
//     { name: 'Album',    price: 10 },
//     { name: 'Book',     price: 5 },
//     { name: 'Phone',    price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 }
// ]
//
// items.reduce((previousTotal, currentItem) => {
//     console.log(`Current Item = ${currentItem.name}: $${currentItem.price} \nCurrent Total = $${(previousTotal + currentItem.price)} `);
//     return previousTotal + currentItem.price
// }, 0);
//

/*
Define a callback function before you use it in a iterator.
Chain two iteration methods on the same array.
Use the optional arguments in an iterator to include the index or the entire array. (Check out MDN’s Array iteration methods page for more information)
Use .reduce() to take a multi-layered array and return a single layer array from scratch.
*/

const createArray = (numOfArrays, numOfElements) => {
  /*
  This is how I wrote the program initially. This is the brute way to get it to work and just get it down. Then I rewrote it to be better written and up to standard. Using a for loop to iterate and pushing to an empty array.

  let listOfArr = [];

  for (let i = 0; i < numOfArrays; i++) {
    let arr = new Array(numOfElements).fill().map(() => Math.floor(Math.random() * 10 + 1));
    listOfArr.push(arr);
  };
  */

  const rand10 = () => Math.floor(Math.random() * 10 + 1);

  /*
  This wasn't working for some reason it was giving all the arrays the same random numbers. The reason it does this is because the first fill method is filling each element with a new array mapped with random numbers so its using the array with the same random numbers to fill each element to that same array. It is filling the elements with the same array. It created a new array with a number of empty elements then filled it with a single new array which was created with a number of empty elements which then get filled and mapped with a random number. It is basically like saying fill the array with 5; its filling the array with the same array of random numbers created. It isn't creating a new array every time it just uses the same one to fill it. Fill isn't an iterator method it is a mutator method so it isn't iterating through each element it is just mutating the array without having to iterate through it. It just changes it without the need to iterate.

  let arr =
  new Array(numOfArrays).fill(new Array(numOfElements).fill().map(rand10));
  */

  // This is how I solved it. I mapped the elements to an array filled with random numbers. Since the map method is an iterator it iterates through each element in the array and every time it iterates it creates a new array of a new batch of random numbers.
  let arr = new Array(numOfArrays).fill().map(() => new Array(numOfElements).fill().map(rand10));

  return arr;
};

const arr = createArray(5, 5);
console.log(arr);

const reducedArr = arr.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue.reduce((pre, cur) => pre + cur));
    return previousValue;
}, []);
console.log(reducedArr);

const flattenedArr = arr.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
console.log(flattenedArr);

let fish = [ "piranha", "barracuda", "cod", "eel" ];

// Print out each item in the array
let printFish = fish.map(individualFish => `${individualFish}s`);
console.log(printFish);

// Sort my flattened array
flattenedArr.sort((a, b) => {
    console.log(a, b, a - b);
    return a - b;
});
console.log(flattenedArr);

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const storyWords = story.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
console.log(storyWords);

let dict = {};
let words = storyWords.split(' ');
words.forEach(word => dict[word] = (dict[word] || 0) + 1);

console.log(Object.keys(dict).reduce((a, b) => dict[a] > dict[b] ? a : b));
console.log(dict['the']);
