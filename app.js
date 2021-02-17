var btn = document.getElementById("run");
btn.addEventListener('click', run);


function run() {
    var characterList = "";

    const symbols = document.getElementById("symbols").checked;
    const numbers = document.getElementById("numbers").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const ambigous = document.getElementById("ambigous").checked;

    if(lowercase) {
        characterList += "abcdefghijklmnopqrstuvwxyz";
    }

    if(uppercase) {
        characterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(numbers) {
        characterList += "0123456789";
    }

    if(symbols) {
        characterList += "@#$%";
    }

    if(ambigous) {
        characterList += "{}[]()/\'\"`~,;:.<>";
    }

    var length = characterList.length;

    if(length == 0) {
        return null;
    }

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