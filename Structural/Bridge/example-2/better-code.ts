interface Exporter {
  export(data: string): void;
}

// Concrete classes

class PDFExporter implements Exporter {
  export(data: string) {
    console.log("Exporting as PDF:");
    console.log(data);
  }
}

class CSVExporter implements Exporter {
  export(data: string) {
    console.log("Exporting as CSV:");
    console.log(data);
  }
}

// Abstraction (Report Side)

abstract class ReportGenerator {
  constructor(protected exporter: Exporter) {}

  abstract generateData(): string;

  generate() {
    const data = this.generateData();
    this.exporter.export(data);
  }
}

// Refined Abstractions

class SalesReport extends ReportGenerator {
  generateData(): string {
    return "Sales Report Data...";
  }
}

class UserReport extends ReportGenerator {
  generateData(): string {
    return "User Report Data...";
  }
}

// usage

const pdf = new PDFExporter();
const csv = new CSVExporter();

const salesPdf = new SalesReport(pdf);
salesPdf.generate();

const userCsv = new UserReport(csv);
userCsv.generate();

