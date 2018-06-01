  // Le doy funcionalidad a mi primer botón, para que muestre muestre la sección de cifrado y descifrado
   document.getElementById('first-button').addEventListener('click', () => {
     document.getElementById('container').style.display = 'none';   
     document.getElementById('hidden-box').style.display = 'block';
        
    })   

 // Llamo mis elementos, y le doy funcionalidad al primer botón de envío
    document.getElementById('second-button').addEventListener('click', () => { 
    // Variable para la frase secreta, lo convierto a mayúscula para que lea el ASCII code
    let string = document.getElementById('firstphrase').value.toUpperCase();
    // Variable para el número de desplazamiento, primero lo convierto en number
    let offset = parseInt(document.getElementById('parameter').value);
    // Llamando a mi función cifrar
    let encrypt = cipher.encode(offset, string);
    document.getElementById('result').innerHTML = encrypt.toLowerCase();    
    }
)

// Llamo mis elementos, y le doy funcionalidad al segundo botón de envío
    document.getElementById('third-button').addEventListener('click', () => {
    // Variable para la frase cifrada, lo convierto a mayúscula para que lea el ASCII code
    let string = document.getElementById('secondphrase').value.toUpperCase();
    // Variable para el número de desplazamiento, lo convierto en number
    let offset = parseInt(document.getElementById('parameter').value);
    // Llamando a mi función descifrar
    let decrypt = cipher.decode(offset, string);
    document.getElementById('result2').innerHTML = decrypt.toLowerCase();    
    }
)

    
