var subjectList = document.querySelector('ul');
var subjectContainerEl = document.querySelector('#subject-container');
var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector("#search");
var subjectBtn = $("#subjects");

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

subjectBtn.on("click", function(event) {
    
  if (event.target.nodeName == "BUTTON") {
      var subject = event.target.textContent;
      console.log(subject);
  }
  getSubjects(subject);
});

searchFormEl.addEventListener('submit', formSubmitHandler);
