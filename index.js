import sillyName from 'sillyname';
import {randomSuperhero} from "superheroes";

$.when($.ready).then(function () {
    const nameButton = $(".btn");
    const output = $(".output");


    nameButton.on("click", function () {
        const mySillyName = sillyName();
        const mySuperHero = randomSuperhero();
        const funnyMessage = `Whassup? ${mySillyName}! I am your superhero ${mySuperHero}!`;
        output.text(funnyMessage);
    });
});
