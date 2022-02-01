var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

var client_id = '4043533cab614e5c8352b407612abe7b';
var redirect_uri = 'http://localhost:8888/callback';

var app = express();

app.get('/login', function(req, res) {

    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
  
    res.redirect('https://api.spotify.com/v1q=podcasts-web' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    }));
});

var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from seach input
    var show = searchInputEl.value.trim();
    console.log(show);

    if(show) {
        getSpotifyShowRepos(show);

        searchInputEl.value = "";
    } else {
        alert("Please enter a podcast category");
    }
};

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

searchFormEl.addEventListener("submit", formSubmitHandler);
fetchButton.addEventListener('click', getApi);
