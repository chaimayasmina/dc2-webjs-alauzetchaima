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