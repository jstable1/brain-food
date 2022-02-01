var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector("#search");

var getSubjectTitles = function(keyword) {
  var apiUrl = "https://openlibrary.org/search.json?q=" + keyword + "";

   fetch(apiUrl, {
   }).then(function (response) {
       console.log();
   });
}

searchFormEl.addEventListener('submit', formSubmitHandler);
