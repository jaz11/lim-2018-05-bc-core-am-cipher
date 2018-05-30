//Calling all my elements
//const container = document.getElementsByClassName("container");

//const firstButton = document.getElementById("first-button");

//Llamo mis elementos, y le doy funcionalidad a mi botón
document.getElementById("second-button").addEventListener("click", () => { debugger
    //Variable para la frase secreta, lo convierto a mayúscula para que lea el ascii code
    let string = document.getElementById("firstphrase").value.toUpperCase();
    //Variable para el número de desplazamiento, primero lo convierto a number
    let offset = parseInt(document.getElementById("parameter").value);
    let encrypt = window.cipher.encode(offset, string);
    document.getElementById("result").innerHTML = encrypt.toLowerCase();    
    
}
)


