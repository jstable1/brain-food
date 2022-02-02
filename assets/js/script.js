var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search");
var categoryBtn = $("#categories");
var recentSearches = JSON.parse(localStorage.getItem("recentSearches"))?JSON.parse(localStorage.getItem("recentSearches")):[];

// search box event handler - rachel
var formSubmitHandler = function(event) {
    event.preventDefault();
    
    // get value from seach input
    var show = searchInputEl.value.trim();

    if(show) {
        saveSearch(show);
        getApplePodShowRepos(show);

        searchInputEl.value = "";
    } else {
        openModal();
        changeContent("Please enter a podcast category");
    }
};
// search box event handler - rachel

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
            openModal();
            changeContent("Error: search term not found");
        }
        // if connection issue
    }).catch(function(error) {
        // this catch is chained to the end of the ".then"
        openModal();
        changeContent("Error: search term not found. Please try again.");
    });
};
// pull from Apple Podcasts API - lilly

// category button event listener - rachel
categoryBtn.on("click", function(event) {
    // when any of the category buttons are clicked, the precise one will be identified
    if (event.target.nodeName == "BUTTON") {
        var category = event.target.textContent;
    }
    getApplePodShowRepos(category);
});

searchFormEl.addEventListener("submit", formSubmitHandler);
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

    // open modal
    var openModal = function() {
        var modal = document.querySelector(".modal");
        modal.classList.add('is-active');
    }

    // change modal text
    var changeContent = function(innerText) {
        var modalText = document.querySelector("#modal-text")
        modalText.innerHTML = innerText;
    }

    // modal trigger
    document.addEventListener('DOMContentLoaded', () => {
        // Functions to close a modal
        function closeModal($el) {
          $el.classList.remove('is-active');
        }
      
        function closeAllModals() {
          (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
          });
        }
      
        // Add a click event on buttons to open a specific modal
        (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
          const modal = $trigger.dataset.target;
          const $target = document.getElementById(modal);
          console.log($target);
      
          $trigger.addEventListener('click', () => {
            openModal($target);
          });
        });
      
        // Add a click event on various child elements to close the parent modal
        (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
          const $target = $close.closest('.modal');
      
          $close.addEventListener('click', () => {
            closeModal($target);
          });
        });
      
        // Add a keyboard event to close all modals
        document.addEventListener('keydown', (event) => {
          const e = event || window.event;
      
          if (e.keyCode === 27) { // Escape key
            closeAllModals();
          }
        });
      });

      // Save recent searches to local storage
      var saveSearch = function (search) {
        if (recentSearches.indexOf(search)=== -1) {
            recentSearches.push(search)
        
            if (recentSearches.length > 10) {
                recentSearches.shift();
            }
  
            localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
        }
        }

      // Display array from local storage
      var displaySearches = function () {

        // if there are no searches, set tasks to an empty array and return out of the function
        if (!recentSearches) {
            return false;
        }

        // loop through savedSearches array
        for (var i = 0; i < recentSearches.length; i++) {
            //pass each task object into the html ul section
            document.getElementById("recentSearches").innerHTML = displaySearches;
        }
      }
        