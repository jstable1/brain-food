var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector("#search");

var formSubmitHandler = function (event) {
  event.preventDefault();

  var subject = searchInputEl.value.trim();

  if (subject) {
    getSubjectTitles(subject);
    searchInputEl.value = "";
  } else {
    alert("Please enter a subject keyword. (ie. 'art, horror, fantasy, science')");
  }
};

var getSubjectTitles = function(keyword) {
  var apiUrl = "https://openlibrary.org/search.json?q=" + keyword + "";

   fetch(apiUrl, {
   }).then(function (response) {
       console.log();
   });
}

searchFormEl.addEventListener('submit', formSubmitHandler);