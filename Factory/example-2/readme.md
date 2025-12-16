# Logger Factory Method Example

We want to build a logging system for our business logic.  
Each service (Order, Payment, Shipping) should use its own logger.  

There are **two ways** to do this:

1. **Bad Code** – everything is messy and repeated. Check `bad-code.ts`.  
2. **Better Code** – we use Factory Method to create loggers properly. Check `better-code.ts`.  

 
