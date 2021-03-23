var container = document.getElementById("area");
var result = document.getElementById("result");

var clearBtn = document.getElementById("clear");
var addBtn = document.getElementById('add');
var runBtn = document.getElementById("calcul");

var counter = 1;
var id = 1;

clearBtn.addEventListener('click', clear);
addBtn.addEventListener('click', add);
runBtn.addEventListener('click', run);

function clear() {
    counter = 1;
    container.innerHTML = '<div class="row"><h2>#1</h2><div class="col mb-3"><label for="size" class="form-label">Matiere</label><input class="form-control" id="matiere" placeholder="ex: Français" type="text"/></div><div class="col mb-3"><label for="size" class="form-label">Note</label><input class="form-control" id="note" min="0" placeholder="ex: 2.2" type="number"/></div><div class="col mb-3"><label for="size" class="form-label">Coeff</label><input class="form-control" id="coeff" min="0" placeholder="ex: 6" type="number"/></div></div>'
}

function add() {

    counter++;
    id++;

    const newDiv = document.createElement('div');
    newDiv.classList.add("row")
    newDiv.innerHTML = '<h3>#'+ counter +'</h3><div class="col mb-3"><label for="size" class="form-label">Matiere</label><input class="form-control" id="matiere" placeholder="ex: Français" type="text"/></div><div class="col mb-3"><label for="size" class="form-label">Note</label><input class="form-control" id="note" min="0" placeholder="ex: 2.2" type="number"/></div><div class="col mb-3"><label for="size" class="form-label">Coeff</label><input class="form-control" id="coeff" min="0" placeholder="ex: 6" type="number"/></div><div class="col mb-3"><button class="btn btn-danger" id="delete-'+ id +'">X</button></div>'
    container.appendChild(newDiv);
    
    var deleteBtn = document.getElementById('delete-' + id);
    deleteBtn.addEventListener('click', remove);
}

function remove(event) {
    event.target.parentNode.parentNode.remove();
    counter--;
}

function run() {

    result.innerHTML = "";
    
    var totalNote = 0;
    var totalCoeff = 0;

    for(let i = 0; i < container.children.length; i++) {
        
        var note = container.children[i].children[2].children[1].value;
        var coeff = container.children[i].children[3].children[1].value;
        
        totalNote += (note * coeff);
        totalCoeff += +coeff;
    }
    var total = (totalNote / totalCoeff).toPrecision(5);

    var totalElement = document.createElement('h1');
    totalElement.classList.add("mt-3")
    totalElement.classList.add("text-center")
    var className = total < 10 ? "danger" : "success";
    if(total == 10) {
        className = "warning";
    }

    totalElement.innerHTML = "Votre moyenne est de <b class='text-"+ className +"'>" + total + "</b>";
    result.appendChild(totalElement);

}