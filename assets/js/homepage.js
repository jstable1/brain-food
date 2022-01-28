var getApplePodShowRepos = function(show) {
    // format the github api url
    var apiUrl = "https://itunes.apple.com/search?term=maroon&entity=podcast&attribute=keywordsTerm";
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {

        // if request was successful
        if (response.ok) {
            response.json().then(function() {
                console.log("successful");
            })
        }
    });
};

getApplePodShowRepos();

//https://itunes.apple.com/search?media=podcast&attribute=genreIndex&callback=wsSearchCB