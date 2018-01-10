// busqueda por ID
// http://www.omdbapi.com/ <- Base link - ?i=tt0944947&Season=1 <- película - &apikey=3a181f1c <- apiKey
// http://www.omdbapi.com/?t=  <- Base link - Game%20of%20Thrones&Season=1&Episode=1 <- película - &apikey=3a181f1c <- apiKey

//&apikey=3a181f1c - La apiKey de OMDB

// ab5e691e7bd5861864fbd7dfb8909186 - mi apiKey de TMDB
$(document).ready(function(){
  setRandomMovie();
})
//Array para películas Random
var moviesArray = ["Ant Man", "Star Wars", "Game of Thrones", "Harry Potter"];

$("#sendNewMovie").click(function(){
  setRandomMovie();
});

//función para cambiar películas
function setRandomMovie(){
  var randomNumber = Math.floor((Math.random() * moviesArray.length));
  var randomMovie = moviesArray[randomNumber];

  var omdbData = $.getJSON( "http://www.omdbapi.com/?t=" + randomMovie + "&apikey=3a181f1c", function(chosenMovie) {
    // console.log(chosenMovie.Title);
    $(".randomMovieImg").css('background-image', 'url(' + chosenMovie.Poster + ')');
    $(".randomMovieName").text(chosenMovie.Title);
    $(".randomMovieDirector").text(chosenMovie.Director);
    $(".randomMovieDescription").text(chosenMovie.Plot);
  });
};

// Botones a otras secciónes en la misma página
$("#toThree").click(function(){
  $('html, body').animate({
    scrollTop: ($('.three').offset().top)
  },500);
});
$("#toTwo").click(function(){
  $('html, body').animate({
    scrollTop: ($('.two').offset().top)
  },500);
});
$("#toOne").click(function(){
  $('html, body').animate({
    scrollTop: ($('.one').offset().top)
  },500);
});

var events = {
  "10/01/2018": {
    "movieOne": "The Fifth Element",
    "movieTwo": "Rise of the Planet of the Apes"
  },
  "13/01/2018": {
    "movieOne": "Alien",
    "movieTwo": "Coco"
  },
  "20/01/2018": {
    "movieOne": "Coco",
    "movieTwo": "The Fifth Element"
  },
}
//Selector de Fecha
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 1, // Creates a dropdown of 15 years to control year
    today: 'Hoy',
    clear: 'Limpiar',
    close: 'Ok',
    closeOnSelect: false, // Close upon selecting a date,
    format: 'dd/mm/yyyy', 
});

$('.datepicker').on("change", function(){
  var dateNumber = $('.datepicker').val();
  //Si la key existe en el objeto, logea en la consola las películas
  if (dateNumber in events) {
    console.log(events[dateNumber])
      var movieOneDate = $.getJSON( "http://www.omdbapi.com/?t=" + events[dateNumber].movieOne + "&apikey=3a181f1c", function(chosenMovie) {
        $(".dateOptionOne").css('background-image', 'url(' + chosenMovie.Poster + ')');
        console.log(chosenMovie.Title);
      });
      var movieTwoDate = $.getJSON( "http://www.omdbapi.com/?t=" + events[dateNumber].movieTwo + "&apikey=3a181f1c", function(chosenMovie) {
        $(".dateOptionTwo").css('background-image', 'url(' + chosenMovie.Poster + ')');
        console.log(chosenMovie.Title);
      });
  }
})

////////////////////////////////// Cambiar Datepicker a español buscar estas líneas en materialize.js y reemplazar //////////////////////////////////////

// // The title label to use for the month nav buttons
//         labelMonthNext: 'Mes siguiente',
//         labelMonthPrev: 'Mes anterior',

// // The title label to use for the dropdown selectors
//         labelMonthSelect: 'Selecciona un mes',
//         labelYearSelect: 'Selecciona un año',

// // Months and weekdays
//         monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
//         monthsShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
//         weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
//         weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],

// // Materialize modified
//         weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],

// // Today and clear
//         today: 'Hoy',
//         clear: 'Limpiar',
//         close: 'Cerrar',

////////////////////////////////////////////////////////////////// HASTA ACA///////////////////////////////// /////////////////////////////////////////

// Search
$("#searchForm").on("submit", function(e){
  var searchText = $("#searchText").val();
  getMovies(searchText)
  e.preventDefault();
})


function getMovies(searchText){
  console.log(searchText);
}
/////////////////////////////////