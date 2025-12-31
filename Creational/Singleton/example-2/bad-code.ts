class AppConfig {
    constructor() {
        console.log("Loading application configuration...");
        // imagine:
        // - reading env files
        // - validating configs
        // - parsing feature flags
    }

    get(key: string) {
        return `value-of-${key}`;
    }
}

class UserService {
    private config: AppConfig;

    constructor() {
        this.config = new AppConfig(); // ❌ heavy init
    }

    run() {
        console.log(this.config.get("JWT_SECRET"));
    }
}

class PaymentService {
    private config: AppConfig;

    constructor() {
        this.config = new AppConfig(); // ❌ again
    }

    run() {
        console.log(this.config.get("PAYMENT_PROVIDER"));
    }
}

class NotificationService {
    private config: AppConfig;

    constructor() {
        this.config = new AppConfig(); // ❌ again
    }

    run() {
        console.log(this.config.get("EMAIL_HOST"));
    }
}

// usage
new UserService().run();
new PaymentService().run();
new NotificationService().run();
