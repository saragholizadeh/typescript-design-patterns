class Book {
  constructor(public title: string, public price: number) {}
}

class DVD {
  constructor(public title: string, public price: number) {}
}

class Furniture {
  constructor(public title: string, public price: number) {}
}

// tax calculation
const products = [
  new Book("1984", 20),
  new DVD("Inception", 30),
  new Furniture("Chair", 100)
];

products.forEach(p => {
  if (p instanceof Book) {
    console.log(`${p.title} tax: ${p.price * 0.1}`);
  } else if (p instanceof DVD) {
    console.log(`${p.title} tax: ${p.price * 0.2}`);
  } else if (p instanceof Furniture) {
    console.log(`${p.title} tax: ${p.price * 0.15}`);
  }
});

// Problems:
// 1. Violation of Open/Closed Principle: Adding new product types requires modifying the tax calculation logic.
// 2. Code Duplication: The tax calculation logic is duplicated for each product type, making it error-prone and hard to maintain.
// 3. Tight Coupling: The tax calculation logic is tightly coupled with the product classes, making it difficult to change one without affecting the other.