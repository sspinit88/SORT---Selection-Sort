const findSmollest = (array) => {
  let smallest = array[0]; /// для хранения наименьшего значения
  let smallestIndex = 0; /// для хранения индекса наименьшего значения

  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = (array) => {};
