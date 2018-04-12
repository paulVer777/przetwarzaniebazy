// Przykładowa tablica
var arr = ["Alfa Romeo", "Skoda", "Mercedes", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

updateView(arr);

function removeElement(arrValue) {
    console.log('Usuwam pozycję z tablicy o wartości "' + arrValue + '"');
    var key = arr.indexOf(arrValue);
    arr.splice(key, 1);
    updateView(arr);
}

// Pokazujemy informacje o tablicy
function drawArrayInfo(arr) {
    console.log('Rysuję informację o tablicy:');
    console.log(arr);
    var arrayElementsDOM = document.getElementById('array');
    arrayElementsDOM.innerHTML = "";
    arrayElementsDOM.insertAdjacentHTML('beforeend', '<h3><small class="text-muted pr-2">Length:</small>' + arr.length + '</h3>');
}

// Rysowanie wszystkich boxów z informacja
function drawAllBoxes(arr) {
    document.getElementById('array-elements').innerHTML = "";
    arr.forEach(function (value, key) {
        drawBox(value, key);
    });
}

function updateView(arr) {
    drawAllBoxes(arr);
    drawArrayInfo(arr);
}

// Rysowanie boxu z informacja
function drawBox(value, key) {
    console.log('Rysuję BOX dla wartości "' + value + '" [' + key + ']');
    var arrayElementsDOM = document.getElementById('array-elements');
    arrayElementsDOM.insertAdjacentHTML('beforeend', '<div class="col-3"><div class="box"><div class="box-actions"><div class="badge badge-primary float-left">' + key + '</div><button onclick="removeElement(\'' + value + '\');" class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button></div><h2>' + value + '</h2></div></div>');
}