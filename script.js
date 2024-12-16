// 1 Задание
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;

let i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i++;
}
console.log(`Сумма чисел: ${sum}`); // 253

// 2 Задание
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
  { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
  { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
  { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
];

for (const book of books) {
  console.log(`Название: ${book.title}`);
  console.log(`Автор: ${book.author}`);
  console.log(`Количество странииц: ${book.numberOfPages}`);
  console.log(`Жанр: ${book.genre}`);
  console.log("Награды:");
  for (const award of book.awards) {
    console.log(`- ${award}`);
  }
  console.log("\n");
}

// 3 Задание
function calculateAveragePages(books) {
  let totalPages = 0;
  for (const book of books) {
    totalPages += book.numberOfPages;
  }
  return totalPages / books.length;
}
console.log(calculateAveragePages(books));

// 4 Задание
function repeatString(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
console.log(repeatString("hello", 3)); 

// 5 Задание 
function calculateAverage(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}
console.log(calculateAverage([10, 20, 30, 40, 50, 60])); 

// 6 Задание
function countEvenNumbers(numbers) {
  const evenNumbers = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); 
