import { header } from "../js/header.js";
const headerDOM = document.querySelector('body')
const pokemons = [
    {
        name: 'Charizard',
        color: 'Orange',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png',
        type: 'Fire',
        Weaknesses: 'Rock Electric Water',
        more: 'https://www.pokemon.com/us/pokedex/charizard',
    },
    {
        name: 'Dragonite',
        color: 'Orange',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/149.png',
        type: 'Dragon, Flying',
        Weaknesses: 'Ice Rock Dragon Fairy',
        more: 'https://www.pokemon.com/us/pokedex/dragonite',
    },
    {
        name: 'Blastoise ',
        color: 'Blue',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png',
        type: 'Water',
        Weaknesses: 'Electric Grass',
        more: 'https://www.pokemon.com/us/pokedex/blastoise',
    },
    {
        name: 'Pikachu',
        color: 'Yellow',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png',
        type: 'Electric',
        Weaknesses: 'Ground',
        more: 'https://www.pokemon.com/us/pokedex/pikachu',
    },
    {
        name: 'Nidoking',
        color: 'Violet',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/034.png',
        type: 'Poison, Ground',
        Weaknesses: 'Water Ice Ground Psychic',
        more: 'https://www.pokemon.com/us/pokedex/nidoking',
    },
    {
        name: 'Diglett',
        color: 'Brown',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png',
        type: 'Ground',
        Weaknesses: 'Water Grass Ice',
        more: 'https://www.pokemon.com/us/pokedex/diglett',
    },
    {
        name: 'Psyduck',
        color: 'Khaki',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png',
        type: 'Water',
        Weaknesses: 'Grass Electric',
        more: 'https://www.pokemon.com/us/pokedex/psyduck',
    },
    {
        name: 'Slowpoke',
        color: 'Pink',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/079.png',
        type: 'Water, Psychic',
        Weaknesses: 'Dark Ghost Bug Electric Grass',
        more: 'https://www.pokemon.com/us/pokedex/slowpoke',
    },
    {
        name: 'Eevee ',
        color: 'Brown',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png',
        type: 'Normal',
        Weaknesses: 'Fighting',
        more: 'https://www.pokemon.com/us/pokedex/eevee',
    },
    {
        name: 'Snorlax',
        color: 'Blue',
        picture: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png',
        type: 'Normal',
        Weaknesses: 'Fighting',
        more: 'https://www.pokemon.com/us/pokedex/snorlax',
    },

];
const appDOM = document.getElementById('app');
console.log(appDOM)
for (const pokemon of pokemons) {
    appDOM.innerHTML +=
        `<article>
    <img src="${pokemon.picture}" alt="${pokemon.name} picture">
    <h2 style="color:${pokemon.color.toLowerCase()}">${pokemon.name}</h2>
    <p><span>Type:</span> ${pokemon.type}</p>
    <p><span>Weaknesses:</span> ${pokemon.Weaknesses}</p>
    <a target=”_blank” href="${pokemon.more}">Read more</a>
    </article>
    `;
}
headerDOM.innerHTML = header() + headerDOM.innerHTML;
