interface TaxVisitor {
  visitBook(book: Book): void;
  visitDVD(dvd: DVD): void;
  visitFurniture(furniture: Furniture): void;
}

// Products
class Book {
  constructor(public title: string, public price: number) {}
  accept(visitor: TaxVisitor) {
    visitor.visitBook(this);
  }
}

class DVD {
  constructor(public title: string, public price: number) {}
  accept(visitor: TaxVisitor) {
    visitor.visitDVD(this);
  }
}

class Furniture {
  constructor(public title: string, public price: number) {}
  accept(visitor: TaxVisitor) {
    visitor.visitFurniture(this);
  }
}

class ConcreteTaxVisitor implements TaxVisitor {
  visitBook(book: Book) {
    console.log(`${book.title} tax: ${book.price * 0.1}`);
  }
  visitDVD(dvd: DVD) {
    console.log(`${dvd.title} tax: ${dvd.price * 0.2}`);
  }
  visitFurniture(furniture: Furniture) {
    console.log(`${furniture.title} tax: ${furniture.price * 0.15}`);
  }
}

// Usage
const products = [
  new Book("1984", 20),
  new DVD("Inception", 30),
  new Furniture("Chair", 100)
];

const taxVisitor = new ConcreteTaxVisitor();
products.forEach(p => p.accept(taxVisitor));

