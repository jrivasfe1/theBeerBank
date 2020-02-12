// XMLHttpRequest is an object that allows us to access an url without reloading the page
// the new reserve word allows me to instance variable.
var request = new XMLHttpRequest();

// initializes a newly-created request, or re-initializes an existing one
// "GET" links an object property with a function that will be called when its searched
request.open('GET', 'https://api.punkapi.com/v2/beers');

// empty global variable, this allows me, to use it at any moment. 
var data = []

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
      renderElements();
      // ---- this fucntion, loops thought the array, i is the index inside this array, arrayName[number] indicates, the position inside the array is an index -----
      addModal()
    }
  }
}

addBeer();

function renderElements() {

  for (i = 0; i < data.length; i++) {
    var col = document.createElement('div');
    col.classList.add("col-lg-4", "col-md-6");
    var beerCard =
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
      '<button onclick="openModal()" class="beer-card__title">  ' +
      data[i].name + '</button>' +
      '<p class="beer-card__description">  ' +
      data[i].tagline + '</p>' +
      '</div>  ' +
      '</div>  '
    col.innerHTML = beerCard;
    allBeers.appendChild(col);



  }

  const star = document.querySelectorAll('.beer-card__favorite');
  // document.querySelectorAll('.beer-card__favorite').addEventListener('click', classToggle);
  star.forEach(function (span) {
    span.addEventListener('click', function () {
      this.classList.toggle('beer-card__favorite--starOff');
      this.classList.toggle('beer-card__favorite--starOn');
    })
  })

}

window.onscroll = function () {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    for (i = 0; i < data.length; i++) {
      var col = document.createElement('div');
      col.classList.add("col-lg-4", "col-md-6");
      var beerCard =
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
        '<button onclick="openModal()" class="beer-card__title">  ' +
        data[i].name + '</button>' +
        '<p class="beer-card__description">  ' +
        data[i].tagline + '</p>' +
        '</div>  ' +
        '</div>  '
      col.innerHTML = beerCard;
      allBeers.appendChild(col);

    }
  }
};
// MODAL OPENER

var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("modalopener");
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
  console.log(data)
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function searchBeer() {
  let input = document.getElementById('searchBar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('col-lg-4');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

function addModal() {
  for (i = 0; i < data.length; i++) {
    var modalContent = document.querySelector('#modalContent');
    var innderModal = '<span class="close"><img src="img/close.svg" alt=""></span>' +
      '            <div class="row">' +
      '                <div class="col-md-3">' +
      '                    <div class="img-modal" id="imgModal">' +
      '<img class="img-modal__beer" src=' +
      data[i].image_url +
      '></img>  ' +
      '                    </div>' +
      '                </div>' +
      '                <div class="col-md-9">' +
      '                    <div class="name-and-tags">' +
      '                        <h3 class="name-and-tags__beername">' + data[i].name + '</h3>' +
      '                        <h4 class="name-and-tags__tag">' + data[i].tagline + '</h4>' +
      '                        <div class="name-and-tags__decal"></div>' +
      '                        <div class="name-and-tags__values">' +
      '                            <ul>' +
      '                                <li class="ibu"><b>IBU :</b>' + data[i].ibu + '</li>' +
      '                                <li class="abv"><b>ABV :</b>' + data[i].abv + '</li>' +
      '                                <li class="ebc"><b>EBC :</b>' + data[i].ebc + '</li>' +
      '                            </ul>' +
      '                        </div>' +
      '                    </div>' +
      '                    <div class="description-parragraf">' +
      '                        <p class="description-parragraf__text">' + data[i].description + '</p>' +
      '                    </div>' +
      '                    <div class="food-pairing">' +
      '                        <h4 class="food-pairing__title"><b>Best served with:</b></h4>' +
      '                        <ul class="food-pairing__list">' +
      '                            <li>' + data[i].food_pairing + '</li>' +
      '                            <li>' + data[0 + 1].food_pairing + '</li>' +
      '                            <li>' + data[0 + 2].food_pairing + '</li>' +
      '                        </ul>' +
      '                    </div>' +
      '                </div>' +
      '            </div>' +
      '            <div class="row">' +
      '                <div class="also-like">' +
      '                    <div class="col-md-12">' +
      '                        <div class="you-may-like">' +
      '                            <h4 class="you-may-like__title">' +
      '                                You might also like' +
      '                            </h4>' +
      '                        </div>' +
      '                    </div>' +
      '                </div>' +
      '            </div>' +
      '            <div class="row">' +
      '                <div class="col-md-4">' +
      '                    <a href="">' +
      '                        <div class="also-like__box">' +
      '                            <img class="also-like__image" src=' +
      data[i].image_url +
      ' alt="">' +
      '                            <h5 class="also-like__name">' + data[i].name + '</h5>' +
      '                        </div>' +
      '                    </a>' +
      '                </div>' +
      '                <div class="col-md-4">' +
      '                    <a href="">' +
      '                        <div class="also-like__box">' +
      '                            <img class="also-like__image" src=' +
      data[i].image_url + ' alt="">' +
      '                            <h5 class="also-like__name">' + data[i].name + '</h5>' +
      '                        </div>' +
      '                    </a>' +
      '                </div>' +
      '                <div class="col-md-4">' +
      '                    <a href="">' +
      '                        <div class="also-like__box">' +
      '                            <img class="also-like__image" src=' +
      data[i].image_url +
      ' alt="">' +
      '                            <h5 class="also-like__name">' + data[i].name + '</h5>' +
      '                        </div>' +
      '                    </a>' +
      '                </div>' +
      '            </div>';
    modalContent.innerHTML = innderModal;
  }
}


console.log(data)


// this will execure stuff after document loaded