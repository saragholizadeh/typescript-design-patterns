class House {
    constructor(
        public wallsCount: number,
        public doorsCount: number,
        public windowsCount: number,
        public hasGarage: boolean,
        public hasGarden: boolean,
        public hasSwimmingPool: boolean,
    ) {
        console.log(
            'House created with ' +
            `${wallsCount} walls, ` +
            `${doorsCount} doors, ` +
            `${windowsCount} windows, ` +
            `garage: ${hasGarage}, ` +
            `garden: ${hasGarden}, ` +
            `swimming pool: ${hasSwimmingPool}.`
        );
    }
}

//usage

const house1 = new House(4, 2, 6, true, true, false);
const house2 = new House(3, 1, 4, false, false, false);
const house3 = new House(5, 3, 8, true, true, true);

// Problem: 
// What if we have many optional parameters?
// Telescoping constructor - The constructor call becomes hard to read and maintain... heavy constructor with many parameters
