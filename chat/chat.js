import { header } from "../js/header.js";
header();
// headerDOM.innerHTML = header() + headerDOM.innerHTML;

const data = ['asd', 'asdstg', 'cvxcv', 'dfghdftt', 'rtydrt', '<script>console.log("aaa")</script>sdfsdf <style>*{color:red;}</style>'
];
const chatDOM = document.querySelector('.chat');
let HTML = '';

for (const msg of data) {
    const text = msg.replaceAll('<', '&lt;')
    HTML += `<div class="msg">${text}</div>`
}
chatDOM.innerHTML = HTML;