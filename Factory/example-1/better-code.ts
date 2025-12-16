interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver(): void {
        console.log("Deliver by land");
    }
}

class Ship implements Transport {
    deliver(): void {
        console.log("Deliver by sea");
    }
}

class Airplane implements Transport {
    deliver(): void {
        console.log("Deliver by air");
    }
}

// Factory: 
abstract class Logistics {
    abstract createTransport(): Transport;

    deliveryPlan() {
        const transport = this.createTransport();
        transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}

class AirLogistics extends Logistics {
    createTransport(): Transport {
        return new Airplane();
    }
}


// usage (Buusness logic layer)

class LogisticsService {
    execute (logistics: Logistics) : void{
        logistics.deliveryPlan();
    }
}

class LogisticsController {
    constructor(private app: LogisticsService) {}

    deliver(body: any) {
        let logistics: Logistics;

        if (body.type === "road") {
            logistics = new RoadLogistics();
        } else if (body.type === "sea") {
            logistics = new SeaLogistics();
        } else if (body.type === "air") {
            logistics = new AirLogistics();
        } else {
            throw new Error("Invalid type");
        }

        this.app.execute(logistics);
    }
}