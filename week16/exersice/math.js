export function isEven(n) {
  if (n % 2 === 0) return true;
  else return false;
}

export function max(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("args must be a number")
  }
  else if (a > b) return a;
  else return b;
}

export function average(numbers) {
  if (numbers.length === 0) { throw new Error("numbers is empty") }
  let sum = 0
  for (const num of numbers) {
    if (typeof num !== "number") {
      throw new Error("args must be a number")
    }
    sum += num
  }
  const averages = sum / numbers.length
  return averages;
}

export function toTitleCase(str) {
  let newStr = str.split(" ")
  newStr = newStr.map(st => st[0].toUpperCase() + st.slice(1))
  return newStr.join(" ").trim();
}


export function filterEven(numbers) {
  const evenNumbers = []
  for (const num of numbers) {
    if (typeof num !== "number") {
      throw new Error("args must be a number")
    }
    if (num % 2 === 0) {
      evenNumbers.push(num)
    }
  }
  return evenNumbers;
}








