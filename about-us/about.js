// import { header } from "../js/header";
// header()
import { header } from "../js/header.js";
const headerDOM = document.querySelector('body')
headerDOM.innerHTML = header() + headerDOM.innerHTML;
console.log('about us js ')

const h1DOM = document.getElementById('title');
console.log(h1DOM)

const parDOM = document.getElementsByTagName('p');
console.log(parDOM[0])

const ulDOM = document.getElementsByTagName('ul')
console.log(ulDOM)

for (const list of ulDOM) {
    const liDOM = list.getElementsByTagName('li')
    for (let i = 0; i < liDOM.length; i++) {
        liDOM[i].innerText = i + 1 + ') ' + liDOM[i].innerText
    }
}