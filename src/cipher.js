window.cipher = {
    encode: (offset, string) => {
        // Empiezo mi función encode para cifrar
		// Creo la variable asciiCode, para que exista en esta función
		let asciiCode = 0;
        //creo una variable para el string a cifrar
        let encrypt = "";	 
        for (let a = 0; a < string.length; a++){
            asciiCode = string[a].charCodeAt()
            if (asciiCode >= 65 && asciiCode <= 90){
                encrypt = encrypt + String.fromCharCode((asciiCode - 65 + parseInt(offset)) % 26 + 65);
            }
            else {
                encrypt = encrypt + string[a];
            }
        }
		return encrypt;
		},

    decode: (offset, string) => { 
        // Empiezo mi función encode para descifrar
        // Creo la variable asciiCode, para que exista en esta función
        let asciiCode = 0;
        // Creo una variable para el string a descifrar
        let decrypt = "";
    
        for (let i = 0; i < string.length; i++) {
            asciiCode = string[i].charCodeAt();
            if (asciiCode >= 65 && asciiCode <= 90) {
                decrypt = decrypt + String.fromCharCode((asciiCode + 65 - parseInt(offset)) % 26 + 65);
            }
            else {
                decrypt += string[i];
            }
        } 
        
        return decrypt;
    },
        
  // Creo mi cipher con el desplazamiento para volverlo global, y poder llamarlo en index.js
    createCipherWithOffset: (offset) => {

        return {
            encode: (string) => {
                return cipher.encode(offset, string);
            },
            decode: (string) => {
                return cipher.decode(offset, string)
            }
        }
    }
}