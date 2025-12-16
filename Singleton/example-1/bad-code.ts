class DatabaseConnection {
    constructor() {
        console.log("Connecting to database...");
        // imagine resource allocation here
    }

    query(sql: string) {
        console.log(`Running query: ${sql}`);
        // imagine actual query execution
    }
}

class UserService {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection(); 
    }

    getUsers() {
        this.db.query("SELECT * FROM users");
    }
}

class ProductService {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection(); 
    }

    getProducts() {
        this.db.query("SELECT * FROM products");
    }
}

class OrdersService {
    private db: DatabaseConnection;

    constructor() {
        this.db = new DatabaseConnection();
    }

    getOrders() {
        this.db.query("SELECT * FROM orders");
    }
}

const userService = new UserService();
userService.getUsers();

const productService = new ProductService();
productService.getProducts();

const orderService = new OrdersService();
orderService.getOrders();


// In a real app we may have over than 100 classes that need database connection
// So we have multiple instances of DatabaseConnection which is resource intensive
// This is not efficient and may lead to performance issues
// Also if we need to change the DatabaseConnection implementation, we have to do it in multiple places
// This violates the DRY principle and makes the code hard to maintain
