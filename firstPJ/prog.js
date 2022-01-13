"use strict";
const numberOfFilms = +prompt("скільки фільмів ви переглянули?","");

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a = prompt("Недавно переглянутий фільм",""),
      b = prompt ("ваша оцінка"),
      c = prompt("недавно переглянуті фільми",""),
      d = prompt ("ваша оцінка");


personalMovieDB.movies[a]=b,
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);
