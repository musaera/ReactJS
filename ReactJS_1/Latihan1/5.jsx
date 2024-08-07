// Spread Operator pada Array
const angka1 = [1, 2];
const angka2 = [...angka1, 3, 4];
console.log(angka2); // Output: [1, 2, 3, 4]

// Spread Operator pada Object
const user1 = { nama: "Saeful", umur: 17 };
const user2 = { ...user1, status: "Murid" };
console.log(user2); // Output: { nama: "Saeful", umur: 17, status: "Murid" }
