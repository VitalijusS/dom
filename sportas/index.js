import { renderSportTable } from "../js/sportas.js";
import { header } from "../js/header.js";
const appDOM = document.getElementById('app');
appDOM.innerHTML = renderSportTable();
header();