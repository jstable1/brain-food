var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var subjectList = document.querySelector('ul');
var subjectContainerEl = document.querySelector('#subject-container');
var searchFormEl = document.querySelector('#search-form');
var searchInputEl = document.querySelector("#search");
var subjectBtn = $("#subjects");
var categoryBtn = $("#categories");

// search box event handler - rachel
var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from seach input
    var show = searchInputEl.value.trim();

    if(show) {
        getApplePodShowRepos(show);

        searchInputEl.value = "";
    } else {
        alert("Please enter a podcast category");
    }
};
// search box event handler - rachel

// search box event handler - josh

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

// search box event handler - josh

// pull from Apple Podcasts API - lilly
var getApplePodShowRepos = function(show) {
    // format the github api url
    var apiUrl = "https://itunes.apple.com/search?term=" + show + "&entity=podcast&attribute=keywordsTerm&crossorigin=use-credentials&limit=20";
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {

        // if request was successful
        if (response.ok) {
            response.json().then(function(data) {
            
                // console.log("successful");
                console.log(response);
                console.log(data);
                console.log(data.results);
                // displayPods(data. artistName);
                displayPods(data.results)
            });
        // if request fails
        }  else {
            alert("Error: search term not found");
        }
        // if connection issue
    }).catch(function(error) {
        // this catch is chained to the end of the ".then"
        alert("Error: search term not found. Please try again.");
    });
};
// pull from Apple Podcasts API - lilly

// pull from Open Library API - Josh

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

// pull from Open Library API - Josh

// category button event listener - rachel
categoryBtn.on("click", function(event) {
    // when any of the category buttons are clicked, the precise one will be identified
    if (event.target.nodeName == "BUTTON") {
        var category = event.target.textContent;
    }
    getApplePodShowRepos(category);
});

searchFormEl.addEventListener("submit", formSubmitHandler);
searchFormEl.addEventListener('submit', formSubmitHandler);
// category button event listener - rachel


// function to display podcasts to html - tyler
var displayPods = function(shows) {

    $("#podcasts").empty();

    console.log(shows[0].artistName);      
    console.log(shows[0].collectionName);      
    
    for (let i = 0; i < shows.length; i++) {
        const element = shows[i];
        
        var podcastContainer = document.getElementById("podcasts");

        var image = document.createElement("img");
        image.setAttribute("src", shows[i].artworkUrl100);

        var artist = document.createElement("h1");
        artist.textContent = shows[i].artistName;

        var title = document.createElement("p");
        title.textContent = shows[i].collectionName;
    
        var podcast = document.createElement("a");
        podcast.setAttribute("href", shows[i].trackViewUrl);
        podcast.setAttribute("target", "_blank");
        podcast.classList = "box";

        podcast.appendChild(image);
        podcast.appendChild(artist);
        podcast.appendChild(title);
        podcastContainer.appendChild(podcast);
    };
    // function to display podcasts to html - tyler
  };
