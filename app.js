var btn = document.getElementById("run");
btn.addEventListener('click', run);


function run() {
    var characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^¨$%ù!§:/;.-|~&[(])}{'\"\\çà@`è#é=";
    var length = characterList.length;
    var password = "";
    var size = document.getElementById("size").value;
    
    if(size <= 0) {
        size = 30;
    }

    for(var i = 0; i < size; i++) {
        var indice = Math.floor(Math.random() * length);
        password += characterList.charAt(indice);
    }
    var result = document.getElementById("result");
    result.value = password;
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Mot de passe copié !");
}