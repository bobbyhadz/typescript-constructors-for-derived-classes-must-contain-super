export {};

// Constructors for derived classes must contain a super call

// EXAMPLE 1 - Call the `super()` method in the child class's constructor

class Parent {
  name = 'Parent';

  constructor(
    public a: number,
    public b: number,
  ) {
    this.a = a;
    this.b = b;
  }
}

class Child extends Parent {
  override name = 'Child';

  constructor(public override a: number) {
    super(a, a); // 👈️ call super() here

    this.a = a;
  }
}

// ---------------------------------------------------

// // EXAMPLE 2 - Calling super() calls the parent's constructor() method

// class Parent {
//   name = 'Parent';

//   constructor(
//     public a: number,
//     public b: number,
//   ) {
//     this.a = a;
//     this.b = b;
//   }

//   doMath(): number {
//     return this.a + this.b;
//   }
// }

// class Child extends Parent {
//   override name = 'Child';

//   constructor(public override a: number) {
//     super(a, a);

//     this.a = a;
//   }

//   override doMath(): number {
//     // 👇️ super.doMath() calls doMath method of parent
//     return this.a * this.a + super.doMath();
//   }
// }

// const child1 = new Child(3);

// // 👇️ (3 * 3) + (3 + 3) = 15
// console.log(child1.doMath()); // 👉️ 15
