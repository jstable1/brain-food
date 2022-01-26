// TO DO: when you click a category button, it presents podcast cards for that category in the second column
var categoryBtn = $("#categories");
 
// TO DO: create array with the fetched api data
array = {
    education: [
        1, 2, 3
    ],
    news: [
        1, 2, 3
    ]
};

categoryBtn.on("click", function(event) {
    // when any of the category buttons are clicked, the precise one will be identified
    if (event.target.nodeName == "BUTTON") {
        var category = event.target.textContent;
        console.log(category);
    }
});

