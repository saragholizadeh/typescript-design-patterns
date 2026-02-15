class SalesPDFReport {
  generate() {
    console.log("Generating Sales data...");
    console.log("Exporting as PDF...");
  }
}

class SalesCSVReport {
  generate() {
    console.log("Generating Sales data...");
    console.log("Exporting as CSV...");
  }
}

class UserPDFReport {
  generate() {
    console.log("Generating User data...");
    console.log("Exporting as PDF...");
  }
}

class UserCSVReport {
  generate() {
    console.log("Generating User data...");
    console.log("Exporting as CSV...");
  }
}

// usage
const salesPDF = new SalesPDFReport();
salesPDF.generate();

const userCSV = new UserCSVReport();
userCSV.generate();

/*
Problems
- Report classes are tightly coupled to data and format
- Adding new report type => modify existing classes
- Violates Open/Closed Principle
- Code duplication across report classes
*/


