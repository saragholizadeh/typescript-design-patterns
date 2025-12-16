// OH HELL NOOO!

class PaymentService {
  pay(method: string, amount: number) {
    if (method === "card") {
      // STRAIGHT CARD PAYMENT LOGIC ????? seriously?
    } else if (method === "wallet") {
        // WALLET PAYMENT LOGIC.. . WHAT IF WE HAVE MULTIPLE WALLETS?
    } else if (method === "cod") {
        // CASH ON DELIVERY LOGIC .. WHAT IF WE HAVE MULTIPLE COD OPTIONS? what about refunds?
    }

    // such a mess! it's hard to maintain and extend.. if we want to add more payment methods, we have to keep adding more conditions here!
    // VIOLATES OPEN/CLOSED PRINCIPLE!
    // Violates Single Responsibility Principle too! this class is doing too much!
    // Violates Dependency Inversion Principle! we should depend on abstractions, not on concretions!

  }
}
