import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box')
}

refs.input.addEventListener('input', debounce(onInputActions, 1500))


function onInputActions(e) {
    const inputVal = e.target.value.trim()
    console.log(inputVal);
    
    if (inputVal === '' ) {
        return alert('запоните поле')
    }

    fetchCountries(inputVal).then(data => {
        if (data.length > 9) {
        alert("Too many matches found. Please enter a more specific name.")
        }   console.log(data);;
    })
    
    
    
    
}
