//Nikita Demianov
function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U')
}
//End Nikita Demianov
//Mykola Kokodynskyy
function DNAtoRNA(dna) {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === 'T') {
        rna += 'U'
    }
      else {
        rna += dna[i]
    }
    }
    return rna;
  }
  //End Mykola Kokodynskyy

  // Anastasiia Kravchenko
  function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
  }
  //End Anastasiia Kravchenko

    // Vlad Pylypenko
    function DNAtoRNA(dna) {
      return dna.replaceAll('T', 'U');
    }
    //End Vlad Pylypenko