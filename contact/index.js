console.log('contact');
const appDOM = document.getElementById('app');
appDOM.innerHTML = `
<header>
    
    <nav>NAV</nav>

</header>
<main>MAIN</main>
<footer>FOOTER</footer>
`;
const navDOM = document.querySelector('nav');
const mainLinksData = [
    {
        name: 'Home',
        link: '../'
    },
    {
        name: 'About',
        link: '../about-us/'
    },
    {
        name: 'Products',
        link: '../products/'
    },
    {
        name: 'Contact',
        link: '../contact/'
    },
];
console.log(navDOM)
for (const data of mainLinksData) {
    navDOM.innerHTML += `<a href="${data.link}">${data.name}</a> `
}
navDOM.style.fontSize = '2rem';
navDOM.style.margin = '1rem 2rem';
navDOM.style.gap = '1rem';