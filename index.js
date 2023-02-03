const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
          smallest = arr[i];
          smallestIndex = i;
      }
  }

  return smallestIndex;
}


/// Сортиовака выбором
const selectionSort = (array) => {
  let size = array.length;
  let newArr = [];

  for (let i = 0; i < size; i += 1) {
      let smallest = findSmallest(array);
      newArr.push(array[smallest]);
      array.splice(smallest, 1);
  }

  return newArr;
};

const test = [5, 3, 6, 2, 10];
console.log(selectionSort(test));
