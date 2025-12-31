class OrderService {
    log(type: string, message: string) {
        if (type === "file") {
            console.log("[FileLogger]", message);
        } else if (type === "db") {
            console.log("[DBLogger]", message);
        } else if (type === "remote") {
            console.log("[RemoteLogger]", message);
        }
    }

    placeOrder(orderId: number) {
        // order stuff logic
        this.log("file", `Order ${orderId} placed`);
    }
}

class PaymentService {
    log(type: string, message: string) {
        if (type === "file") {
            console.log("[FileLogger]", message);
        } else if (type === "db") {
            console.log("[DBLogger]", message);
        } else if (type === "remote") {
            console.log("[RemoteLogger]", message);
        }
    }

    processPayment(paymentId: number) {
        this.log("db", `Payment ${paymentId} processed`);
        // payment processing logic
    }
}

class ShippingService {
    log(type: string, message: string) {
        if (type === "file") {
            console.log("[FileLogger]", message);
        } else if (type === "db") {
            console.log("[DBLogger]", message);
        } else if (type === "remote") {
            console.log("[RemoteLogger]", message);
        }
    }

    shipOrder(orderId: number) {
        this.log("remote", `Order ${orderId} shipped`);
        // shipping business logic
    }
}

// WOW! so much duplicated code!
// If we need to add a new logging type, we have to modify all three classes.
// This violates the DRY (Don't Repeat Yourself) principle.
 
//It violates the Single Responsibility Principle as well, 
// since each service class is now responsible for both its main functionality and logging.

// This code is hard to maintain and extend and test !