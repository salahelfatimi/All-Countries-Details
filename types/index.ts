export  interface data {
    name: {common:string};
    altSpellings:string[]
    flags: {
      png: string;
    };
    population: number;
    region: string;
    capital: [string];
    tld:[string]
    subregion:string
    currencies: {
      [code: string]: {
        name: string;
        symbol: string;
        // Add other currency properties here if needed
      };
      // Add other currencies here if needed
    };    languages:{deu:string,fra:string,nld:string}
    borders:[string]
    
  }