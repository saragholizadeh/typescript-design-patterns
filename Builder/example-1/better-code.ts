class HouseProduct {
    walls: number = 0;
    doors: number = 0;
    windows: number = 0;
    garage: boolean = false;
    garden: boolean = false;
    swimmingPool: boolean = false;


    public showInfo(){
        console.log(this);
    }
}

interface HouseBuilder {
    reset(): void;
    setWalls(count: number): void;
    setDoors(count: number): void;
    setWindows(count: number): void;
    setGarage(hasGarage: boolean): void;
    setGarden(hasGarden: boolean): void;
    setSwimmingPool(hasSwimmingPool: boolean): void;
    getResult(): HouseProduct;
}

class ConcreteHouseBuilder implements HouseBuilder {
    private house: HouseProduct = new HouseProduct();

    reset(): void {
        this.house = new HouseProduct();
    }

    setWalls(count: number): void {
        this.house.walls = count;
    }
    setDoors(count: number): void {
        this.house.doors = count;
    }
    setWindows(count: number): void {
        this.house.windows = count;
    }
    setGarage(hasGarage: boolean): void {
        this.house.garage = hasGarage;
    }
    setGarden(hasGarden: boolean): void {
        this.house.garden = hasGarden;
    }
    setSwimmingPool(hasSwimmingPool: boolean): void {
        this.house.swimmingPool = hasSwimmingPool;
    }
    getResult(): HouseProduct {
        const result = this.house;
        this.reset(); // ready for next build
        return result;
    }

}

class Director {
    constrcutorAdvertisementEmail(builder: ConcreteHouseBuilder) {
        throw new Error("Method not implemented.");
    }
    constructorSimpleHouse(builder: HouseBuilder){
        builder.setWalls(4);
        builder.setDoors(1);
        builder.setWindows(4);
    }

    constructorLuxuryHouse(builder: HouseBuilder){
        builder.setWalls(6);
        builder.setDoors(3);
        builder.setWindows(8);
        builder.setGarage(true);
        builder.setGarden(true);
        builder.setSwimmingPool(true);
    }
}


// usage 

const builder = new ConcreteHouseBuilder();
const director = new Director();

director.constructorSimpleHouse(builder);
const simpleHouse = builder.getResult();
simpleHouse.showInfo();

director.constructorLuxuryHouse(builder);
const luxuryHouse = builder.getResult();
luxuryHouse.showInfo();


// Guess this is better :) and more readable
// We can create different types of houses using the same builder
// The Director class makes the construction logic work for different house types