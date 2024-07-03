console.log('contact');
const appDOM = document.getElementById('app');
appDOM.innerHTML = `
<header>
    <img src="#" alt="Logo">
    <nav>NAV</nav>

</header>
<main>MAIN</main>
<footer>FOOTER</footer>
`;
const navDOM = document.querySelector('nav');
const mainLinksData = [
    {
        home: 'Home',
        link: '../'
    },
    {
        home: 'About',
        link: '../about-us/'
    },
    {
        home: 'Products',
        link: '../products/'
    },
    {
        home: 'Contact',
        link: '../contact/'
    },
];
console.log(navDOM)
for (const data of mainLinksData) {
    navDOM.innerHTML += `<a href="${data.link}">${data.home}</a> `
}
navDOM.style.fontSize = '2rem';
navDOM.style.margin = '1rem 2rem';
navDOM.style.gap = '1rem';