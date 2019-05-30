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

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should return [2, 3, 4, 6, 7]
