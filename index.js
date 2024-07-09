import { header } from "../js/header.js";
const headerDOM = document.querySelector('body')
headerDOM.innerHTML = header('.') + headerDOM.innerHTML;