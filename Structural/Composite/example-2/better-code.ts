interface ListComponent {
    print(): void
}

// Leaf
class ItemService implements ListComponent {
    constructor(public name: string, public quantity: number) {}
    print(): void { console.log(`${this.name}: ${this.quantity}`) }
}

// Composite
class CategoryService implements ListComponent {
    items: ListComponent[] = []
    add(item: ListComponent) { this.items.push(item) }
    print(): void { this.items.forEach(i => i.print()) }
}

// Usage
const milk = new ItemService("Milk", 2)
const eggs = new ItemService("Eggs", 12)
const dairy = new CategoryService()
dairy.add(milk)
dairy.add(eggs)

const fruits = new CategoryService()
fruits.add(new ItemService("Apple", 5))
fruits.add(new ItemService("Banana", 6))

const shoppingList = new CategoryService()
shoppingList.add(dairy)
shoppingList.add(fruits)

shoppingList.print()


// PROBLEMS SOLVED:
// 1. No type checks or nested loops needed
// 2. Printing logic is encapsulated within the classes
// 3. Open/Closed Principle is respected. (Adding new types of items would not require modifying the printing logic)
// 4. Loosely coupled to the specific implementations of items and categories
