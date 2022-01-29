var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var categoryBtn = $("#categories");

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

// Lilly's code start
var getApplePodShowRepos = function(show) {
    // format the github api url
    var apiUrl = "https://itunes.apple.com/search?term=" + show + "&entity=podcast&attribute=keywordsTerm&crossorigin=use-credentials";
    
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

categoryBtn.on("click", function(event) {
    // when any of the category buttons are clicked, the precise one will be identified
    if (event.target.nodeName == "BUTTON") {
        var category = event.target.textContent;
    }
    getApplePodShowRepos(category);

    
});

searchFormEl.addEventListener("submit", formSubmitHandler);


//function to display podcasts to html
var displayPods = function(shows) {

    $("#podcasts").empty();

    console.log(shows[0].artistName);      
    console.log(shows[0].collectionName);      
    
    for (let i = 0; i < shows.length; i++) {
        const element = shows[i];
        
        var podcastContainer = document.getElementById("podcasts");
        var artist = document.createElement("h1");
        var title = document.createElement("p");
        artist.textContent = shows[i].artistName
        title.textContent = shows[i].collectionName
    
        var podcast = document.createElement("div");
        podcast.appendChild(artist);
        podcast.appendChild(title);
        podcastContainer.appendChild(podcast);
    };
    
    // var podcastContainer = document.getElementById("podcasts");
    // var artist = document.createElement("h2");
    // var title = document.createElement("h3");
    // artist.innerText = shows[0].artistName
    // title.innerText = shows[0].collectionName

    // var podcast = document.createElement("div");
    // podcast.appendChild(artist);
    // podcast.appendChild(title);
    // podcastContainer.appendChild(podcast);

  };

 