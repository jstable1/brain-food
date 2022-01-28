var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var categoryBtn = $("#categories");

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from seach input
    var show = searchInputEl.value.trim();
    console.log(show);

    if(show) {
        getApplePodShowRepos(show);

        searchInputEl.value = "";
    } else {
        alert("Please enter a podcast category");
    }
};

// Lilly's code start
var getApplePodShowRepos = function(show) {
    console.log(show);
    // format the github api url
    var apiUrl = "https://itunes.apple.com/search?term=" + show + "&entity=podcast&attribute=keywordsTerm";
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {

        // if request was successful
        if (response.ok) {
            response.json().then(function() {
                console.log("successful");
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
        console.log(category);
    }
    getApplePodShowRepos(category);
});

searchFormEl.addEventListener("submit", formSubmitHandler);

