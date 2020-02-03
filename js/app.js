// XMLHttpRequest is an object that allows us to access an url without reloading the page
// the new reserve word allows me to instance variable.
var request = new XMLHttpRequest ();

// investigate more about object and property
request.onreadystatechange = function() {
    if (request.readyState === 4) {
      var data = JSON.parse(this.responseText);
      console.log(data[0].image_url);
      
      data.forEach(function(beer) {
        var li = document.createElement('LI');
        li.classList.add('beer');
        var name = '<p class="beer-name">' + beer.name + '</p>';
        var tagline = '<p class="tagline">' + beer.tagline + '</p>';
        var abv = '<p>ABV: ' + beer.abv + '</p>';
        var image = '<img height="300" src=' + beer.image_url + '>';
        li.innerHTML = name + tagline + abv + image;
        list.appendChild(li);
      });
      
    }
  };



// initializes a newly-created request, or re-initializes an existing one
// "GET" links an object property with a function that will be called when its searched
request.open('GET', 'https://api.punkapi.com/v2/beers');

// sends the request to the server
request.send();

