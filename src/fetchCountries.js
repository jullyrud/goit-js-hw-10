export function fetchCountries(name) {

    const urlApi = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    return fetch(urlApi).then(r => { 
        if (r.status !== 200) {
            alert('памагите')
        } return r.json()
    })
    
    console.log(fetchCountries);
    
    // const urlApi = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    //  return fetch(urlApi).then(r =>
    //  {
    //      if (r.status !== 200) {
    //     throw new Error('something went wrong')
    //      } r.json()
    //  }
    //     )
}

