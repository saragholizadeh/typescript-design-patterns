class IconType {
    constructor(public type: string, public color: string, public symbol: string) {}
    draw(x: number, y: number) {
        console.log(`Drawing ${this.type} (${this.color}, ${this.symbol}) at (${x},${y})`)
    }
}

// factory
class IconFactory {
    private static icons: { [key: string]: IconType } = {}
    static getIcon(type: string, color: string, symbol: string) {
        const key = `${type}-${color}-${symbol}`
        if (!this.icons[key]) this.icons[key] = new IconType(type, color, symbol)
        return this.icons[key]
    }
}

// Context 
class IconService {
    constructor(public x: number, public y: number, public type: IconType) {}
    draw() { this.type.draw(this.x, this.y) }
}

// Usage
const iconsArray: IconService[] = []
const folderType = IconFactory.getIcon("folder", "blue", "square")
const fileType = IconFactory.getIcon("file", "green", "document")

iconsArray.push(new IconService(0, 0, folderType))
iconsArray .push(new IconService(50, 0, folderType))
iconsArray.push(new IconService(0, 50, fileType))
iconsArray.push(new IconService(50, 50, fileType))

icons.forEach(icon => icon.draw())

