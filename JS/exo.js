let elt = document.getElementById('main');
elt.innerHTML = "<div>Je suis la div 1</div><div>Je suis la div 2</div><div>Je suis la div 3</div>";

var newElm = document.createElement("div");
newElm.innerHTML = "<div>Je suis la div 4</div><div>Je suis la div 5</div><div>Je suis la div 6</div>";
elt.appendChild(newElm);

