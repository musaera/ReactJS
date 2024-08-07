// Membuat Class
class Person {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }
  
    perkenalan() {
      return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
    }
  }
  
  const saeful = new Person("Saeful", 17);
  console.log(saeful.perkenalan()); // Output: Halo, nama saya Saeful dan saya berumur 17 tahun.
  
  // Inheritance
  class Murid extends Person {
    constructor(nama, umur, status) {
      super(nama, umur);
      this.status = status;
    }
  
    belajar() {
      return `Saya adalah ${this.status}.`;
    }
  }
  
  const saefulMurid = new Murid("Saeful", 17, "murid");
  console.log(saefulMurid.perkenalan()); // Output: Halo, nama saya Saeful dan saya berumur 17 tahun.
  console.log(saefulMurid.belajar());   // Output: Saya adalah murid.
  