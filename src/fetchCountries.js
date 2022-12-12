import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function fetchCountries(name) {

    const urlApi = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    return fetch(urlApi).then(r => { 
        if (r.status !== 200) {
            Notify.failure("Oops, there is no country with that name");
        } return r.json()
    })

}

