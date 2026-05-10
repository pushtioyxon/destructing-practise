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

// let student = {
//   name: "Sara",
//   score: 95,
// };
// function showStudent({ name, score }) {
//   console.log(name, score);
// }
// showStudent(student);
// function yoz:
// destructuring ishlatsin
// Sara 95 chiqarsin

// =============================
// 7️⃣ Nested object
// =============================

// let user3 = {
//   name: "Ali",
//   address: {
//     city: "Buxoro",
//   },
// };

// city ni destructuring bilan ol
// let {
//   address: { city },
// } = user3;
// console.log(city);

// =============================
// 🔥 Challenge
// =============================

// let product = {
//   title: "Phone",
//   price: 500,
//   company: "Apple",
// };

// function ichida destructuring qilib:
// Phone - 500$
// chiqarsin
// function ShowProduct({ title, price }) {
//   console.log(`${title} - ${price}$`);
// }
// ShowProduct(product);

// =======================================
// 🧠 DESTRUCTURING + ARRAY METHODS
// REAL PRACTICE (VS CODE READY)
// =======================================


// =============================
// 1️⃣ Name + age format (map)
// =============================
let users1 = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 18 },
  { name: "John", age: 25 }
];

// 👉 "Ali is 20" formatda chiqaring



// =============================
// 2️⃣ 18+ users (filter)
// =============================
let users2 = [
  { name: "Ali", age: 20 },
  { name: "Bob", age: 16 },
  { name: "Sara", age: 18 }
];

// 👉 faqat 18+ usersni chiqaring



// =============================
// 3️⃣ Faqat ismlar (map)
// =============================
let users3 = [
  { name: "Ali" },
  { name: "Sara" },
  { name: "John" }
];

// 👉 ["Ali", "Sara", "John"] chiqaring



// =============================
// 4️⃣ Eng qimmat product (find)
// =============================
let products1 = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Watch", price: 200 }
];

// 👉 eng qimmat productni toping



// =============================
// 5️⃣ 300+ price (filter)
// =============================
let products2 = [
  { title: "Phone", price: 500 },
  { title: "Watch", price: 200 },
  { title: "Tablet", price: 300 }
];

// 👉 price > 300 bo‘lganlarni chiqaring



// =============================
// 6️⃣ Total price (reduce)
// =============================
let products3 = [
  { price: 100 },
  { price: 200 },
  { price: 300 }
];

// 👉 hamma price lar yig‘indisi



// =============================
// 7️⃣ Nested object + map
// =============================
let users4 = [
  { name: "Ali", address: { city: "Bukhara" } },
  { name: "Sara", address: { city: "Tashkent" } }
];

// 👉 "Ali - Bukhara" format



// =============================
// 8️⃣ Faqat Tashkent (filter)
// =============================
let users5 = [
  { name: "Ali", address: { city: "Bukhara" } },
  { name: "Sara", address: { city: "Tashkent" } }
];

// 👉 faqat Tashkentliklar



// =============================
// 9️⃣ Uppercase titles (map)
// =============================
let products4 = [
  { title: "phone" },
  { title: "watch" }
];

// 👉 "PHONE", "WATCH"



// =============================
// 🔥 10️⃣ Youngest user (reduce)
// =============================
let users6 = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 18 },
  { name: "John", age: 25 }
];

// 👉 eng yosh userni toping