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
        
      }
    }
    languages:{[code:string]:string}
    borders:[string]
    
    
  }