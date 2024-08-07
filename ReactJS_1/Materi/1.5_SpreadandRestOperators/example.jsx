// Spread Operator pada Array
const angka1 = [1, 2];
const angka2 = [...angka1, 3, 4];
console.log(angka2); // Output: [1, 2, 3, 4]

// Spread Operator pada Object
const user1 = { nama: "Mirza", umur: 30 };
const user2 = { ...user1, pekerjaan: "Guru" };
console.log(user2); // Output: { nama: "Mirza", umur: 30, pekerjaan: "Guru" }

// Rest Operator pada Fungsi
function hitung(...angka) {
  return angka.reduce((acc, curr) => acc + curr, 0);
}
console.log(hitung(1, 2, 3, 4)); // Output: 10