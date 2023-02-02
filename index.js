/// Сортиовака выбором
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    
    let lowestValue = array[i];
    let indexOfLowestValue = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < lowestValue) {
        lowestValue = array[j];
        indexOfLowestValue = j;
      }
    }

    let temp = array[i];
    
    array[i] = array[indexOfLowestValue];
    array[indexOfLowestValue] = temp;
  }

  return array;
};

const test = [5, 3, 6, 2, 10];
console.log(selectionSort(test));
