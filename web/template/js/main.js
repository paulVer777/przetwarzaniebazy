// Przykładowa tablica
var arr = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

var s

updateView();

function removeElement(key) {
    console.log('Usuwam pozycję z tablicy o kluczu "' + key + '"');
    arr.splice(key, 1);
    updateView();
}

// Pokazanie wszystkich boxów oraz aktualizacja informacji o tablicy
function updateView() {
    var arrayElementsDOM = document.getElementById('array-elements');
    // Usunie mi istniejace boxy
    arrayElementsDOM.innerHTML = "";
    // Narysuje mi je ponownie
    arr.forEach(drawBox);
    // Aktualizuje informacje o tablicy
    drawArrayInfo(arr);
}

// Pokazujemy informacje o tablicy
function drawArrayInfo(arr) {
    console.log('Rysuję informację o tablicy:');
    console.log(arr);
    var arrayElementsDOM = document.getElementById('array');
    arrayElementsDOM.innerHTML = "";
    var html = '<h3><small class="text-muted pr-2">Length:</small>' + arr.length + '</h3>';
    arrayElementsDOM.insertAdjacentHTML('beforeend', html);
}

// Rysowanie boxu z informacja
function drawBox(arrValue, index) {
    console.log('Rysuję BOX dla wartości "' + arrValue + '" [klucz = ' + index + ']');
    var arrayElementsDOM = document.getElementById('array-elements');
    var html = '<div class="col-3">\n\
<div class="box">\n\
<div class="box-actions">\n\
<span class="badge badge-primary float-left">' + index + '</span>\n\
<button class="btn btn-danger btn-sm" onclick="removeElement(\'' + index + '\')">\n\
<i class="far fa-trash-alt"></i>\n\
</button>\n\
<button class="btn btn-danger btn-sm" onclick="connect(\'' + index+'\',\''+arrValue+ '\')">\n\
<i class="far fa-trash-alt"></i>\n\
</button>\n\
<button class="btn btn-danger btn-sm" onclick="klon(\'' + index+'\',\''+arrValue+ '\')">\n\
<i class="far fa-clone"></i>\n\
</button>\n\
</div>\n\
<h2>' + arrValue + '</h2>\n\
</div>\n\
</div>';
    arrayElementsDOM.insertAdjacentHTML('beforeend', html);
}

function removeLast() {
    arr.pop();
    updateView();
}

function removeFirst() {
    arr.shift();
    updateView();
}




function dodawanie() {


    var wartosc=document.getElementById("element-name").value;
    arr.push(wartosc);
    updateView();


}

function unshiftElement() {

    var wartosc=document.getElementById("element-name").value;
    arr.unshift(wartosc);
    updateView();


}

function klon(x,y) {

    var slowo=y;

    arr.splice(x,0,slowo);



}

function connect(x,y) {


    var slowo=arr[x];
    var slowo1=arr[+x+1];

    var wynik=slowo+slowo1;

    arr[arr.length+1]=wynik
    updateView();


}