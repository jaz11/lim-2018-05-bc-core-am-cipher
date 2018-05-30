window.cipher = {
    encode: (offset, string) => 
       { //Empiezo mi función encode para cifrar
            //creo la variable asciiCode, para que sea existente en mi código
        let asciiCode;
            //creo una variable para el string a cifrar
        let encrypt = "";
       
        for (let a = 0; a < string.length; a++) {
             asciiCode = string[a].charCodeAt();
             if (asciiCode >= 65 && asciiCode <= 90) {
                encrypt = encrypt + String.fromCharCode((asciiCode - 65 + parseInt(offset)) % 26 + 65);
            }
             else {
                encrypt = encrypt + string[a];
            }
        }
        return encrypt;
        },

    decode: (offset, string) => 
        { 
         let asciiCode;
         let decrypt = "";
         
         for (let a = 0; a < string.length; a++) {
             asciiCode = string[a].charCodeAt();
             if (asciiCode >= 65 && asciiCode <= 90) {
                decrypt = decrypt + String.fromCharCode((asciiCode + 65 - parseInt(offset)) % 26 + 65);
              }
             else {
                decrypt = decrypt + string[a];
                  }
          } 
            
            return decrypt;
        },
        

    createCipherWithOffset: (offset) => {

        return {
            encode: (string) => {
                return cipher.encode(offset, firstphrase);
            },
            decode: (string) => {
                return cipher.decode(offset, secondphrase)
            }
        }
    }
}
