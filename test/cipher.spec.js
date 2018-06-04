describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "H H" para "A A" con offest 33', () => {
      assert.equal(cipher.encode(33, "A A"), "H H");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");     
    });

    it('debería retornar "A A" para "H H" con offest 33', () => {
      assert.equal(cipher.decode(33, "H H"), "A A");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33), "object" );
      assert.equal(typeof cipher.createCipherWithOffset(33).encode, "function" );
      assert.equal(typeof cipher.createCipherWithOffset(33).decode, "function" )
    });

    it('debría ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33).encode("A A"), "H H");
    });

    it('debría ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33).decode("H H"), "A A");
    });


  });

});
