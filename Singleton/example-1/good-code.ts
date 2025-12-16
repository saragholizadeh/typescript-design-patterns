class DBConnection {
    private static instanc: DBConnection;

    private constructor() {
        console.log("Connecting to database...");
    }

    static getInstance(): DBConnection {
        if (!DBConnection.instanc) {
            DBConnection.instanc = new DBConnection();
        }
        return DBConnection.instanc;
    }

    query(sql: string) {
        console.log(`Running query: ${sql}`);
    }
}

// usage

class UserApp {
    private db = DBConnection.getInstance();
    getUsers() {
        this.db.query("SELECT * FROM users");
    }
}

class ImagesApp {
    private db = DBConnection.getInstance();
    getImages() {
        this.db.query("SELECT * FROM images");
    }
}

class OrdersApp {
    private db = DBConnection.getInstance();
    getOrders() {
        this.db.query("SELECT * FROM orders");
    }
}

const userApp = new UserApp();
userApp.getUsers();

const imagesApp = new ImagesApp();
imagesApp.getImages();

const ordersApp = new OrdersApp();
ordersApp.getOrders();

// Now, no matter how many times we call getInstance(),
// we always get the same instance of DBConnection,
// ensuring efficient resource usage.