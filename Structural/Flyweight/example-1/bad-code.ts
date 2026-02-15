class Icon {
    constructor(
        public type: string,
        public color: string,
        public symbol: string,
        public x: number,
        public y: number
    ) {}

    draw() {
        console.log(`Drawing ${this.type} (${this.color}, ${this.symbol}) at (${this.x},${this.y})`)
    }
}

// Usage
const icons: Icon[] = []
icons.push(new Icon("folder", "blue", "square", 0, 0))
icons.push(new Icon("folder", "blue", "square", 50, 0))
icons.push(new Icon("file", "green", "document", 0, 50))
icons.push(new Icon("file", "green", "document", 50, 50))

icons.forEach(icon => icon.draw())


// PROBLEMS:
// 1. Memory usage is high due to storing duplicate data for each icon (type, color, symbol)
// 2. Drawing logic is not separated from the icon data
// 3. Violating the Single Responsibility Principle (Icon class has multiple responsibilities)
// 4. Tightly coupled to the specific implementation of icons