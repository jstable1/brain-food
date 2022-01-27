var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var categoryBtn = $("#categories");

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from seach input
    var search = searchInputEl.value.trim();

    if(search) {
        getSpotify(search);
        searchInputEl.value = "";
    } else {
        alert("Please enter a podcast category");
    }
};

// TO DO: use api fetch to get podcast show info
var getSpotify = function(show) {
    var apiUrl = "https://api.spotify.com/v1/search";
    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

// TO DO: when you click a category button, it presents podcast cards for that category in the second column

 
// TO DO: do we need to create array with the fetched api data??
array = {
    education: [],
    news: [],
};

categoryBtn.on("click", function(event) {
    // when any of the category buttons are clicked, the precise one will be identified
    if (event.target.nodeName == "BUTTON") {
        var category = event.target.textContent;
        console.log(category);
    }
});

searchFormEl.addEventListener("submit", formSubmitHandler);