// =============================
// 1️⃣ Array destructuring
// =============================

// let fruits = ["apple", "banana", "orange"];

// apple va banana ni destructuring qilib chiqar

// let [a, b] = fruits;
// console.log(a);
// console.log(b);

// =============================
// 2️⃣ Array ichida skip qilish
// =============================

// let numbers = [10, 20, 30];

// faqat 30 ni destructuring bilan ol
// let [d, e, f] = numbers;
// console.log(f);

// =============================
// 3️⃣ Object destructuring
// =============================

// let user = {
//   name: "Ali",
//   age: 20,
// };

// name va age ni destructuring qil
// let { age, name } = user;
// console.log(name);
// console.log(age);

// =============================
// 4️⃣ Variable nomini o‘zgartirish
// =============================

// let car = {
//   brand: "BMW"
// };

// brand ni mashina nomiga destructuring qil
// let { brand: mashina } = car;
// console.log(mashina);

// =============================
// 5️⃣ Default value
// =============================

// let user2 = {
//   name: "Ali",
// };
// let { name, age = 18 } = user2;
// console.log(age);

// age bo‘lmasa 18 chiqsin

// =============================
// 6️⃣ Function + destructuring
// =============================

let student = {
  name: "Sara",
  score: 95,
};
function showStudent({ name, score }) {
  console.log(name, score);
}
showStudent(student);
// function yoz:
// destructuring ishlatsin
// Sara 95 chiqarsin

// =============================
// 7️⃣ Nested object
// =============================

let user3 = {
  name: "Ali",
  address: {
    city: "Buxoro",
  },
};

// city ni destructuring bilan ol
let {
  address: { city },
} = user3;
console.log(city);

// =============================
// 🔥 Challenge
// =============================

let product = {
  title: "Phone",
  price: 500,
  company: "Apple",
};

// function ichida destructuring qilib:
// Phone - 500$
// chiqarsin
function ShowProduct({ title, price }) {
  console.log(`${title} - ${price}$`);
}
ShowProduct(product);
