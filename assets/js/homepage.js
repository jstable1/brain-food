var getApplePodShowRepos = function(show) {
    // format the github api url
    var apiUrl = "https://itunes.apple.com/search?term=" + show + "&entity=podcast&attribute=keywordsTerm&crossorigin=use-credentials";
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {

        // if request was successful
        if (response.ok) {
            response.json().then(function() {
                console.log("successful");
            });
        // if request fails
        }  else {
            alert("Error: Github user not found");
        }
        // if connection issue
    }).catch(function(error) {
        // this catch is chained to the end of the ".then"
        alert("Unable to connect to Github");
    });
};



getApplePodShowRepos();

