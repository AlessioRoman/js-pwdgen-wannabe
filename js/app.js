document.getElementById("safe").onclick = function generatePasswordSafe(){
    let length = 15;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let safePass = "";

    for (var i = 0, n = charset.length; i < length; ++i) {
        safePass += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById('password').innerHTML = safePass;
};

document.getElementById("lessSafe").onclick = function generateLessSafePassword(){
    let name = prompt("Nome: ");
    let surname = prompt("Cognome: ");
    let color = prompt("Colore preferito: ");

    let lessSafePass = name + surname + color + Math.floor(Math.random() * 100).toString();
    document.getElementById('password').innerHTML = lessSafePass;
};