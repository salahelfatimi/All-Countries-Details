
export async function fetchCountry() {
    const response= await fetch("https://restcountries.com/v3.1/all")
    const result= await response.json()

    return result
  
}

export async function fetchNAme(name:string) {
    const response= await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const result= await response.json()

    return result
  
}