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
    return response.json();
  }).then(function (data) {
    for (var i = 0; i < data.length; i++) {

      var listItem = document.createElement('li');
      listItem.textContent = data[i].works.author.name;
      subjectList.appendChild(listItem);
      listItem.textContent = data[i].works.title;
      subjectList.appendChild(listItem);
  }
  }).catch(function (err) {
    console.log('rejected', err);
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