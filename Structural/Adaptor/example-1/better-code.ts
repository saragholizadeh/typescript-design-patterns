// Target interface 
interface AnalystsAdaptor {
  analyze(xml: string):void;
}

// third parties
class JsonDataLib {
  jsonData(data: object){}
}

class CsvDataLib {
  csvData(data: string){}
}

// Adaptor for each third party

class JsonDataLibAdaptor implements AnalystsAdaptor {
  constructor(
    private lib: JsonDataLib
  ){}

  analyze(xml: string): void{
    const json = this.xmlToJson(xml);
    this.lib.jsonData(json)
  }

  private xmlToJson(xml: string){
    // conversion
  }
}

class CsvDataLibAdaptor implements AnalystsAdaptor {
  constructor(
    private lib: CsvDataLib
  ){}

  analyze(xml: string): void {
    const csv = this.xmlToCsv(xml);
    this.lib.csvData(csv);
  }


  private xmlToCsv(xml: string){
    // conversion
  }
}


// Our client 

class AppService {
  constructor(
    private analysts: AnalystsAdaptor
  ){}

  process(xml: string){
    this.analysts.analyze(xml);
  }
}


//usage

const xmlData = `example data`;
const jsonLib = new JsonDataLib();
const jsonLibAdaptor = new JsonDataLibAdaptor(jsonLib);

const appService = new AppService(jsonLibAdaptor);

appService.process(xmlData);


// structure:
// StockService
//    ↓ depends on
// AnalyticsAdapter (interface)
//    ↑
// JsonAnalyticsAdapter
// CsvAnalyticsAdapter

