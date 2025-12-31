class BaseEmail {
    subject: string = "Subject";
    body: string = "";
    to: string[] = [];
    cc: string[] = [];
    bcc: string[] = [];
    attachments: string[] = [];
    hightPriority: boolean = false;
    isHtml: boolean = false
    
    send(){
        console.log(this);
    }
}

interface EmailBuilder {
    reset(): void;
    setSubject(subject: string): void;
    setBody(body: string): void;
    setTo(recipients: string[]): void;
    setCc(recipients: string[]): void;
    setBcc(recipients: string[]): void;
    addAttachment(attachment: string): void;
    setHighPriority(isHighPriority: boolean): void;
    setIsHtml(isHtml: boolean): void;
    getResult(): BaseEmail;
}

class ConcreteEmailBuilder implements EmailBuilder {
    private email: BaseEmail = new BaseEmail();

    reset (): void {
        this.email = new BaseEmail();
    }

    setSubject(subject: string): void {
        this.email.subject = subject;
    }

    setBody(body: string): void {
        this.email.body = body;
    }

    setTo(recipients: string[]): void {
        this.email.to = recipients;
    }

    setCc(recipients: string[]): void {
        this.email.cc = recipients;
    }

    setBcc(recipients: string[]): void {
        this.email.bcc = recipients;
    }

    addAttachment(attachment: string): void {
        this.email.attachments.push(attachment);
    }

    setHighPriority(isHighPriority: boolean): void {
        this.email.hightPriority = isHighPriority;
    }

    setIsHtml(isHtml: boolean): void {
        this.email.isHtml = isHtml;
    }

    getResult(): BaseEmail {
        return this.email;
    }
}


class EmailDirector {
    constructorAnnouncementEmail(builder: EmailBuilder){
        builder.reset();
        builder.setSubject("Announcement!");
        builder.setBody("We are excited to announce our new product.");
        builder.setTo(["<EMAIL>"]);
    }

    constrcutorAdvertisementEmail(builder: EmailBuilder){
        builder.reset();
        builder.setSubject("Special Offer!");
        builder.setBody("<h1>Get 50% off on all items!</h1>");
        builder.setTo(["<EMAIL>"]);
        builder.setIsHtml(true);
        builder.setHighPriority(true);
        builder.addAttachment("offer.pdf");
    }

    constructorNewsletterEmail(builder: EmailBuilder){
        builder.reset();
        builder.setSubject("Monthly Newsletter");
        builder.setBody("<h1>This Month's Updates</h1>");
        builder.setTo(["<EMAIL>"]);
        builder.setCc(["<EMAIL>"]);
        builder.setIsHtml(true);
    }
}

// usage

const emailBuilder = new ConcreteEmailBuilder();
const emailDirector = new EmailDirector();

emailDirector.constructorAnnouncementEmail(emailBuilder);
const announcementEmail = emailBuilder.getResult();
announcementEmail.send();

emailDirector.constrcutorAdvertisementEmail(emailBuilder);
const advertisementEmail = emailBuilder.getResult();
advertisementEmail.send();

emailDirector.constructorNewsletterEmail(emailBuilder);
const newsletterEmail = emailBuilder.getResult();
newsletterEmail.send(); 

// Better right? hope so HAHAHAHA 