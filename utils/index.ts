export async function fetchCountry() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const result = await response.json();
  const sortedArray = result.sort(
    (a: { name: { common: string } }, b: { name: { common: string } }) => {
      return a.name.common.toLowerCase() < b.name.common.toLowerCase() ? -1 : 1;
    }
  );

  return sortedArray;
}

export async function fetchNAme(name: string) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const result = await response.json();

  return result;
}
