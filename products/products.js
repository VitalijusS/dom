import { header } from "../js/header.js";
header();
const contentDOM = document.getElementById('content')
contentDOM.innerHTML = `
        <h1>test</h1>
        <ul>
            <li>
                <p style="color: brown;">Duona</p>
                <p>1</p>
            </li>
            <li>
                <p style="color: yellow;">Sviestas</p>
                <p>1</p>
            </li>
            <li>
                <p style="color: red;">Pomidoras</p>
                <p>3</p>
            </li>
            <li>
                <p style="color: green;">Agurkas</p>
                <p>1</p>
            </li>
            <li>
                <p style="color: gray;">Grietine</p>
                <p>2</p>
            </li>
        </ul>
`
const allLisDOM = document.querySelectorAll('li');
allLisDOM[2].innerHTML = allLisDOM[2].innerHTML.replace('style="', 'style=" background-color: green; ')
allLisDOM[1].style.fontSize = '2rem';
