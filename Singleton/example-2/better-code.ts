class ApplicationConfig {
    private static instance: ApplicationConfig;

    private constructor(){
        console.log("Loading application configuration...");
        console.log("- reading env files");
        console.log("- validating configs");
        console.log("- parsing feature flags"); 
    }

    static getInstance(): ApplicationConfig {
        if (!ApplicationConfig.instance) {
            ApplicationConfig.instance = new ApplicationConfig();
        }
        return ApplicationConfig.instance;
    }
}

class UserApplication {
    private config = ApplicationConfig.getInstance();

    run() {
        console.log("UserApplication config loaded.");
        // use config here
    }
}

class PayApplication {
    private config = ApplicationConfig.getInstance();

    run() {
        console.log("PayApplication config loaded.");
        // use config here
    }
}

// Guess this is better :) 
// But still not perfect, because 
// what if we have many classes needing the config?
// We can make config available globally (for example in nestjs, we can use providers)
