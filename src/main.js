/* data => trae el objeto pokemon con 251 de ellos*/
import pokemon from './data/pokemon/pokemon.js';

/* Aquí irá nuestros IMPORTS a archivos JS */
import carouselTypes from './js/CarouselTypes.js';
import showPokemons from './showCards.js';
import searchInput from './js/searchInput.js';
import filterPokemonTypes from './js/filters.js';
//import { example, anotherExample } from "./js/data.js";


/* Importamos el contenedor donde añadiremos los tipos de pokemons */
const containerForTypes = document.getElementById("containerTypes");

carouselTypes.addTypesPokemon(containerForTypes);




/* Importamos los iconos del carusel */
const iconRigth = document.getElementById("img-carousel-rigth");
const iconLeft = document.getElementById("img-carousel-left");

const containerTypePokemon = document.querySelectorAll(".CardTypePokemon");

carouselTypes.functionalityCarousel(iconRigth, iconLeft, containerTypePokemon);






/* Importamos el contenedor de cada tarjeta que muestra el tipo del pokemon
y lo convertimos en un array, esto nos permitira filtrar segun su nombre*/

const pokemonTypeName = document.querySelectorAll(".CardTypePokemon");
const searchInputName = document.getElementById("input-search-name");

//?Recorremos el array de los contenedores que muestran los tipos y del que le den click traeremos su clase:

//console.log(nameTypePokemons)
pokemonTypeName.forEach((cardType)=>{
    cardType.addEventListener("click", ()=>{
        const nameType = cardType.className.split(" ")[0]
        cleanClass(); //limpiar la clase borderRed asi en cada click la elimina 

        filterPokemonTypes(nameType);
        cardType.classList.add("borderRed")

        //para limpiar el input del buscador.
        searchInputName.value = "";
        document.querySelector("#text-error").style.display = "none";

    });
});

const cleanClass= ()=>
    pokemonTypeName.forEach((cardType)=>{
        cardType.classList.remove("borderRed")
})





/* Importamos elementos que utilizaremos para la funcionalidad de busqueda
de pokemons para ello necesitaremos el contenedor de las cartas (showCards.js)*/

showPokemons();

/*
const searchInputName = document.getElementById("input-search-name");
const arrayContainerCards = document.querySelectorAll(".cuadroPokemon");
const arrayNamePokemons = document.querySelectorAll(".introCard");
searchInput.searchPokemonByName(searchInputName, arrayContainerCards, arrayNamePokemons);
*/


searchInput.searchPokemonByName();





/* ESTA ES LA PRUEBA CON LUNA DONDE ME EXPLICABA LO DE LA FUNSIÓN PURA Y FILTER 
const datapoke = data.pokemon;
const filterXGeneration= document.getElementById("generationClass");
filterXGeneration.addEventListener("change", ()=>{
    switch (filterXGeneration.value) {
        case "all":
            showPokemons(data.pokemon)
            break;
        case "kanto":
            showPokemons(filterGeneration("normal", datapoke) )
        break;
        case "johto":
            showPokemons(filterGeneration("special", datapoke))
            break;
    }
} )
*/

// esto es para probar subir bien la info
