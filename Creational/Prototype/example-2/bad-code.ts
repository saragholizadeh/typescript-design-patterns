class Character {
  constructor(
    public name: string,
    public health: number,
    public speed: number,
    public weapon: string,
    public skinColor: string
  ) {}
}

// Usage
const warrior1 = new Character("Sara", 100, 30, "Sword", "Tan");
const warrior2 = new Character("John", 100, 30, "Sword", "Tan");
const archer1 = new Character("Mari", 70, 50, "Bow", "White");

