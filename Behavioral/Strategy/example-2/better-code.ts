export interface PaymentStrategy {
    pay(amount: number): boolean;
}

export class CreditCartPaymentStrategy implements PaymentStrategy {
    pay(amount: number): boolean {
        // Implement credit card payment logic here, store in db or other operations
        console.log(`Processing credit card payment of amount: ${amount}`);
        return true;
    }
}

export class WalletPaymentStrategy implements PaymentStrategy {
    pay(amount: number): boolean {
        // Implement wallet payment logic here, check balance, deduct amount, etc.
        console.log(`Processing wallet payment of amount: ${amount}`);
        return true;
    }
}

export class CashOnDeliveryPaymentStrategy implements PaymentStrategy {
    pay(amount: number): boolean {
        // Implement cash on delivery logic here, maybe just log the order for COD
        console.log(`Processing cash on delivery for amount: ${amount}`);
        return true;
    }
}

export class PayemtnContext {
    private strategy : PaymentStrategy;
    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStretegy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    pay(amount: number): boolean {
        return this.strategy.pay(amount);
    }

}

// usage (Buusness logic layer)

export class PayemtnService {
    payment(amount: number, methhod: PaymentStrategy, ): boolean{
        const context = new PayemtnContext(methhod);
        return context.pay(amount);
    }
}

export class PayemntController {
    constructor(private paymentService: PayemtnService) {}

    async pay(body: any){
        let strategy;

        if (body.method === "card") {
            strategy = new CreditCartPaymentStrategy();
        } else if (body.method === "wallet") {
            strategy = new WalletPaymentStrategy();
        } else if (body.method === "cod") {
            strategy = new CashOnDeliveryPaymentStrategy();
        } else {
            throw new Error("Invalid payment method");
        }

        return this.paymentService.payment(body.amount, strategy);
    }
}