interface ExportReportStrategy {
    export(data: File): string;
}

class PDFExportStrategy implements ExportReportStrategy {
    export(data: File): string {
        // do your logic to convert file to PDF
        return `${data.name}.pdf`;
    }
}
class ExcelExportStrategy implements ExportReportStrategy {
    export(data: File): string {
        // convert file to Excel with libraries or any logic
        return `${data.name}.xlsx`;
    }
}

class HTMLExportStrategy implements ExportReportStrategy {
    export(data: File): string {
        // convert file to HTML with libraries or any logic
        return `${data.name}.html`;
    }
}

class ReportExporterContext {
    private strategy: ExportReportStrategy;
    constructor(strategy: ExportReportStrategy) {
        this.strategy = strategy;
    }

    setStreategy(strategy: ExportReportStrategy) {
        this.strategy = strategy;
    }

    export(file: File): string {
        return this.strategy.export(file);
    }
}

// usage (Buusness logic layer)

class ReportService {
    exportReport(file: File, strategy: ExportReportStrategy): string {
        const exporter = new ReportExporterContext(strategy);
        return exporter.export(file);
    }
}

class ReportController {
    constructor(private reportService: ReportService) { }

    export(body: any) {
        let strategy;
        if (body.type === "pdf") {
            strategy = new PDFExportStrategy();
        } else if (body.type === "excel") {
            strategy = new ExcelExportStrategy();
        } else if (body.type === "html") {
            strategy = new HTMLExportStrategy();
        } else {
            throw new Error("Invalid type");
        }
        return this.reportService.exportReport(body.file, strategy);
    }
}
