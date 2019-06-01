//from freeCodeCamp.com

// Create a function that takes two or more arrays and returns an array of the symmetric difference(△ or ⊕) of the provided arrays.

// Given two sets(for example set A = { 1, 2, 3} and set B = { 2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both(A △ B = C = { 1, 4}).For every additional symmetric difference you take(say on a set D = { 2, 3}), you should get the set with elements which are in either of the two the sets but not both(C △ D = { 1, 4} △ { 2, 3} = { 1, 2, 3, 4}).The resulting array must contain only unique values(no duplicates).

const removeDuplicates = (arr) => {
  return arr.filter((el, i) => arr.indexOf(el) === i);
};

const diffArray = (arr1, arr2) => {
  let newArr = [];
  let concatArr = arr1.concat(arr2);
  return (newArr = concatArr.filter((el) => {
    if (arr1.indexOf(el) === -1 || arr2.indexOf(el) === -1) {
      return el;
    }
  }));
};

function sym(args) {
  args = Array.prototype.slice.call(arguments);
  return args.reduce(function(acc, next) {
    acc = removeDuplicates(acc);
    next = removeDuplicates(next);
    acc = diffArray(acc, next);
    return acc;
  });
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //should return [2, 3, 4, 6, 7]
