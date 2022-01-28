var getApplePodShowRepos = function(show) {
    // format the github api url
    var apiUrl = "https://itunes.apple.com/search?term=comedy&entity=podcast&attribute=keywordsTerm";
    
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


var userFormEl = document.querySelector("#user-form");
var languageButtonsEl = document.querySelector("#language-buttons");
var nameInputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

getApplePodShowRepos();

var displayRepos = function(repos, searchTerm) {
    // check if api returned any repos
    
    if (repos.length === 0) {
      repoContainerEl.textContent = "No podcasts found.";
      return;
    }
  
    repoSearchTerm.textContent = searchTerm;
  
    // loop over repos
    for (var i = 0; i < repos.length; i++) {
      // format repo name
      var repoName = repos[i].owner.login + "/" + repos[i].name;
  
      // create a link for each repo
      var repoEl = document.createElement("a");
      repoEl.classList = "list-item flex-row justify-space-between align-center";
      repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
  
      // create a span element to hold repository name
      var titleEl = document.createElement("span");
      titleEl.textContent = repoName;
  
      // append to container
      repoEl.appendChild(titleEl);
  
      // create a status element
      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";
  
    //   // check if current repo has issues or not
    //   if (repos[i].open_issues_count > 0) {
    //     statusEl.innerHTML =
    //       "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
    //   } else {
    //     statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    //   }
  
      // append to container
      repoEl.appendChild(statusEl);
  
      // append container to the dom
      repoContainerEl.appendChild(repoEl);
    }
  };