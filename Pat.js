class Person {
  constructor(name, hoby, Umur, Rajin) {
    this.name = name;
    this.hoby = hoby;
    this.Umur = Umur;
    this.Rajin = Rajin;
  }
}

class Syarief extends Person {
  constructor(name, hoby, Umur) {
    super(name, hoby, Umur, true);
  }

  Syarief() {
    return `${this.name} sedang Belajar!`;
  }
}

class Barri extends Person {
  constructor(name, hoby, Umur) {
    super(name, hoby, Umur, false);
  }

  Barri() {
    return `${this.name} sedang Bermain!`;
  }
}

const Person1 = new Syarief("Syarief", "Belajar", 17);

const Person2 = new Barri("Barri", "Main", 16);

console.log(Person1.Syarief());
console.log(Person2.Barri());
console.log(Person1);
console.log(Person2);
