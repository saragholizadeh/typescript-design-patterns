class StockService {
  constructor(
    private analyticsType: 'json' | 'csv'
  ) {}

  process(xmlData: string) {
    if (this.analyticsType === 'json') {
      const json = this.xmlToJson(xmlData);
      this.sendToJsonAnalytics(json);
    }

    if (this.analyticsType === 'csv') {
      const csv = this.xmlToCsv(xmlData);
      this.sendToCsvAnalytics(csv);
    }
  }

  private xmlToJson(xml: string) {
    // converter
  }

  private xmlToCsv(xml: string) {
    // converter
  }

  private sendToJsonAnalytics(data: any) {
    // sending logic
  }
  private sendToCsvAnalytics(data: any) {
    // sending logic
  }
}

// Bad code, we have a GOD class here, doing too many things.
// new analystics = changing the proccess method.
// Open/Closed principle is violated.
// Horrible to test
// Coupling between conversion and sending logic

