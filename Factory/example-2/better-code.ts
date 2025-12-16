interface LoggerInterface {
    log(message: string): void;
}

class FileLogger implements LoggerInterface {
    log(message: string): void {
        console.log('[FileLogger]', message);
    }
}

class DBLogger implements LoggerInterface {
    log(message: string): void {
        console.log('[DBLogger]', message);
    }
}

class RemoteLogger implements LoggerInterface {
    log(message: string): void {
        console.log('[RemoteLogger]', message);
    }
}

abstract class LoggerFactory {
    abstract createLogger () : LoggerInterface;
}

class FileLoggerFactory extends LoggerFactory {
    createLogger(): LoggerInterface {
        return new FileLogger();
    }   
}

class DBLOggerFactory extends LoggerFactory {
    createLogger(): LoggerInterface {
        return new DBLogger();
    }
}

class RemoteLoggerFactory extends LoggerFactory {
    createLogger(): LoggerInterface {
        return new RemoteLogger();
    }
}

// usage (Buusness logic layer)

class OrderSerivce {
    private logger: LoggerInterface;

    constructor(private loggerFactory: LoggerFactory) {
        this.logger = this.loggerFactory.createLogger();
    }

    placeOrder(orderId: number){
        this.logger.log(`Order ${orderId} placed`);
    }
}

class PayService {
    private logger: LoggerInterface;

    constructor(private loggerFactory: LoggerFactory) {
        this.logger = this.loggerFactory.createLogger();
    }

    processPayment(paymentId: number){
        this.logger.log(`Payment ${paymentId} processed`);
    }
}

class ShippService {
    private logger: LoggerInterface;

    constructor(private loggerFactory: LoggerFactory) {
        this.logger = this.loggerFactory.createLogger();
    }

    shipOrder(orderId: number){
        this.logger.log(`Order ${orderId} shipped`);
    }
}



// well.. for avoiding code dublication (creating logger instance in each service class constructor),
// we can use Dependency Injection or singleton pattern for logger instances

// this code is not going to work, but it is just for demonstration of the pattern.

// I don't know, maybe it's a wrong use of factory pattern so tell me if you have a better idea :)