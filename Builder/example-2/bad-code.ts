class Email {
    constructor(
        public subject: string,
        public body: string,
        public to: string[],
        public cc: string[] = [],
        public bcc: string[] = [],
        public attachments: string[] = [],
        public isHtml: boolean = false,
        public highPriority: boolean = false,
        public requestReadReceipt: boolean = false
    ) {
        console.log("Email created!");
    }

    send() {
        console.log(`Sending email to: ${this.to.join(", ")}`);
        console.log(`CC: ${this.cc.join(", ")}`);
        console.log(`BCC: ${this.bcc.join(", ")}`);
        console.log(`Subject: ${this.subject}`);
        console.log(`Body: ${this.body}`);
        console.log(`Attachments: ${this.attachments.join(", ")}`);
        console.log(`HTML: ${this.isHtml}`);
        console.log(`High Priority: ${this.highPriority}`);
        console.log(`Read Receipt: ${this.requestReadReceipt}`);
        console.log("Email sent!\n");
    }
}

const email1 = new Email(
    "Welcome!",
    "Hello John, welcome to our service!",
    ["john@example.com"],
    [], [], [], false, false, false
);

const email2 = new Email(
    "Invoice #123",
    "<h1>Your invoice</h1>",
    ["jane@example.com"],
    ["accounting@example.com"],
    [],
    ["invoice.pdf"],
    true,
    true,
    true
);

email1.send();
email2.send();

// 🔴 Problems:
// - Constructor has too many parameters (hard to remember order)
// - Most parameters are optional → calls are ugly
// - Adding new features (tracking, templates) requires updating all calls
// - Easy to make mistakes when passing booleans or arrays
