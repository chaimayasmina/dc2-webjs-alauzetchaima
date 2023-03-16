let elt = document.getElementById('main');
elt.innerHTML = "<div>Je suis la div 1</div><div>Je suis la div 2</div><div>Je suis la div 3</div>";

var newElm = document.createElement("div");
newElm.innerHTML = "<div>Je suis la div 4</div><div>Je suis la div 5</div><div>Je suis la div 6</div>";
elt.appendChild(newElm);

newElm.innerHTML = "<span>Je suis le span 1</span> <span>Je suis le span 2</span>";
elt.replaceChild(document.createElement ("section"), newElm);

/*elt.addEventListener('click', function(){
    elt.innerHTML = "C'est cliqué!";
});
*/

let div1 = elt.getElementsByTagName("div")[0];
let div3 = elt.getElementsByTagName("div")[2];

function colorChange() {
    div1.style.color = "red";
}

div3.addEventListener("click", colorChange);

const serpiere = { 
    couleur: "vert d'eau", 
    marque: "Ikea", 
    prix: 12.99
}

localStorage.setItem("serpiere", JSON.stringify(serpiere));
const serpiereLocalStorage = JSON.parse(localStorage.getItem("serpiere"));
console.log(serpiereLocalStorage);

const marque = serpiereLocalStorage.marque;

const div2 = elt.getElementsByTagName("div")[1];
div2.innerHTML = "La marque est " + marque;

const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submitBtn');
console.log(submitButton)
submitButton.addEventListener("click", function(){
    const name = nameInput.value;
    localStorage.setItem("nom", name);
});

// Deuxième partie supprimer local storage en utilisant le bouton Display :
const removeData = document.getElementById('displayBtn');
console.log(removeData)
const recup = document.getElementById('recup')
removeData.addEventListener('click', function(){
    localStorage.clear();
})

var str = "https://www.domain.com/page?name=francois1&id=opwiueru3920983r2&lastname=john"
var url = new URL(str);

var search_params = new URLSearchParams(url.search);

if (search_params.has('name')){
    var name = search_params.get('name');
    console.log(name)
}