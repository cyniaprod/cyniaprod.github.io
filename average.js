var container = document.getElementById("area");
var result = document.getElementById("result");
var graphContainer = document.getElementById("graphContainer")

var clearBtn = document.getElementById("clear");
var addBtn = document.getElementById('add');
var runBtn = document.getElementById("calcul");

var listNotes = [];
var listMatieres = []
var listColors = []


var counter = 1;
var id = 1;

clearBtn.addEventListener('click', clear);
addBtn.addEventListener('click', add);
runBtn.addEventListener('click', run);

function clear() {
    counter = 1;
    container.innerHTML = '<div class="row"><h2>#1</h2><div class="col mb-3"><label for="size" class="form-label">Matiere</label><input class="form-control" id="matiere" placeholder="ex: Français" type="text"/></div><div class="col mb-3"><label for="size" class="form-label">Note</label><input class="form-control" id="note" min="0" placeholder="ex: 2.2" type="number"/></div><div class="col mb-3"><label for="size" class="form-label">Coeff</label><input class="form-control" id="coeff" min="0" placeholder="ex: 6" type="number"/></div></div>'
    result.innerHTML = "";
    graphContainer.innerHTML = '<canvas id="myGraph" width="200" height="200"></canvas>'
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

    for(let i = 1; i < container.children.length; i++) {
        var element = container.children[i].children[0].innerText = "#" + (i+1);
    }
}

function run() {

    result.innerHTML = "";
    graphContainer.innerHTML = '<canvas id="myGraph" width="200" height="200"></canvas>'

    listNotes = [];
    listMatieres = [];
    listColors = [];


    var totalNote = 0;
    var totalCoeff = 0;

    for(let i = 0; i < container.children.length; i++) {
        
        var matiere = container.children[i].children[1].children[1].value;
        var note = container.children[i].children[2].children[1].value;
        var coeff = container.children[i].children[3].children[1].value;
        
        listNotes.push(note * coeff);
        listMatieres.push(matiere);
        listColors.push('#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6));

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

    var data = {
        datasets: [{
            data: listNotes,
            backgroundColor: listColors
        }],

        labels: listMatieres
    }
    var ctx = document.getElementById('myGraph').getContext('2d');
    var graph = new Chart(ctx, {
        type: 'doughnut',
        data: data,
    });

}