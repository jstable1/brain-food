var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
    // Replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://open.spotify.com/v1?q=podcasts-web&crossorigin=use-credentials';
  
    fetch(requestUrl)
      .then(function(response) {
        return response.json();
    })
      .then(function(data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          repoList.appendChild(listItem);
        }
    });
}

var getSpotifyShowRepos = function(show) {
    console.log(show);
    // format the github api url
    var apiUrl = "https://api.spotify.com/search?term=" + show + "&entity=podcast&attribute=keywordsTerm";
    
    // make a request to the url
    fetch(apiUrl).then(function(response) {

        // if request was successful
        if (response.ok) {
            response.json().then(function() {
                console.log("successful");
            });
        }
    });
};

searchFormEl.addEventListener("submit", formSubmitHandler);
fetchButton.addEventListener('click', getApi);
