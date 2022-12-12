import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'), 
    markupList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info')
}

refs.input.addEventListener('input', debounce(onInputActions, 1500))


function onInputActions(e) {
    const inputVal = e.target.value.trim()
    console.log(inputVal);
    
    if (inputVal === '') {
        refs.markupList.innerHTML = ''
        refs.countryInfo.innerHTML = ''
        return
    }

    fetchCountries(inputVal).then(data => {
        if (data.length > 9) {
        Notify.info("Too many matches found. Please enter a more specific name.")
        } else if (data.length > 1 && data.length < 10) {
           data.map( c => makeRenderList(c)); 
        } else {
            data.map( c => makeRenderCountryInfo(c));
        }
    })
    refs.markupList.innerHTML = ''
    refs.countryInfo.innerHTML = ''
    

    
}
function makeRenderList({ name: { official: dataName }, flags: { svg: dataSvg } }) {
    const markupListItem = `<li class="list_item" ><img class="list_img" src="${ dataSvg }" alt="${ dataName}" width="50"><span class="list_span">${dataName}</span></li>`
    refs.markupList.insertAdjacentHTML('beforeend', markupListItem)
}
function makeRenderCountryInfo({ name: { official: dataName }, capital, population, flags: { svg: dataSvg }, languages }) {
    const lang = Object.values(languages).join(' ')
    console.log(languages);
    const country = 
    `<h2 class="list_item" >
        <img class="info_img" src="${dataSvg}" alt="${dataName}" width="50">
        <span class="info_span">${dataName}</span>
    </h2>
    <p class="info_item__tittle">Capital:${capital}</p>
    <p class="info_item__tittle">Population:${population}</p>
    <p class="info_item__tittle">Language:${lang}</p>`
    refs.countryInfo.insertAdjacentHTML('beforeend', country)
}

