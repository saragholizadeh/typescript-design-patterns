class Item {
    constructor(public name: string, public quantity: number) {}
}

class Category {
    items: (Item | Category)[] = []
    add(item: Item | Category) { this.items.push(item) }
}

// Usage
const milk = new Item("Milk", 2)
const eggs = new Item("Eggs", 12)
const dairy = new Category()
dairy.add(milk)
dairy.add(eggs)

const fruits = new Category()
fruits.add(new Item("Apple", 5))
fruits.add(new Item("Banana", 6))

const shoppingList = new Category()
shoppingList.add(dairy)
shoppingList.add(fruits)

// Print items (manual recursion)
for (const cat of shoppingList.items) {
    if (cat instanceof Category) {
        for (const i of cat.items) {
            if (i instanceof Item) console.log(i.name, i.quantity)
        }
    }
}

// PROBLEMS:
// 1. We have to check the type of each item.
// 2. The printing logic is spread across the client code
// 3. Violating the Open/Closed Principle. (Adding new types of items would require modifying the printing logic)
// 4. Tightly coupled to the specific implementations of items and categories