// XMLHttpRequest is an object that allows us to access an url without reloading the page
// the new reserve word allows me to instance variable.
var request = new XMLHttpRequest();

// initializes a newly-created request, or re-initializes an existing one
// "GET" links an object property with a function that will be called when its searched
request.open('GET', 'https://api.punkapi.com/v2/beers');

// empty global variable, this allows me, to use it at any moment. 
var data = ""

// sends the request to the server
request.send();

// investigate more about object and property
function addBeer() {
  request.onreadystatechange = function () {
    // Return the state of an XMLHttpRequest, 4 means the operation iscomplete
    if (request.readyState === 4) {
      // Json.parse turn a text into an object, it will at to the global varible
      data = JSON.parse(this.responseText);
      // After Parse var=data is no an object
      // console.log(data);
      // ---- this fucntion, loops thought the array, i is the index inside this array, arrayName[number] indicates, the position inside the array is an index -----
      for (i = 0; i < 6; i++) {
        var col = document.createElement('div');
        col.classList.add("col-lg-4", "col-md-6");
        allBeers.appendChild(col);
        var beerCard =
          '<a href=' + data[i].image_url + ' >' +
          '<div class="beer-card">' +
          '<div class="beer-card__header">' +
          '<span class="beer-card__favorite beer-card__favorite--starOff">' +
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">' +
          '<polygon points="12,3 6,21 21,9 3,9 18,21" />' +
          '</svg>' +
          '</span>' +
          '<img class="beer-card__img" src=' +
          data[i].image_url +
          '></img>  ' +
          '</div>  ' +
          '<div class="beer-card__body">  ' +
          '<h4 class="beer-card__title">  ' +
          data[i].name + '</h4>' +
          '<p class="beer-card__description">  ' +
          data[i].tagline + '</p>' +
          '</div>  ' +
          '</div>  '; +
        '</a>'
        col.innerHTML = beerCard;
        allBeers.appendChild(col);
      }
    }
  };
}

addBeer();


// event Listener, it detecs the scrolbar

var addElementToList = document.querySelector('#allBeers');

addElementToList.addEventListener('scroll', function () {
  if (addElementToList.scrollTop + addElementToList.clientHeight >= addElementToList.scrollHeight) {
    addBeer()
  }
});