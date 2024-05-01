function analyzeArray(arr) {
  if (!arr.every((num) => typeof num === "number")) {
    return "Error: Array contains non-numeric values.";
  }

  const uniqueNumbers = [...new Set(arr)];

  const evenCount = uniqueNumbers.filter((num) => num % 2 === 0).length;
  const oddCount = uniqueNumbers.filter((num) => num % 2 !== 0).length;

  const total = arr.length;

  return {
    Even: evenCount,
    Odd: oddCount,
    Total: total,
  };
}

const numbers = [6, 3, 3, 4, 13, 6, 7, 18, 7, 11];
console.log(analyzeArray(numbers));
