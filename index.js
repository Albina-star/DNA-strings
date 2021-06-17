let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
let newString = dna.trim();
console.log(newString);


//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

dna = dna.trim().toUpperCase();
console.log(dna);

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
dna = dna.replace('GCT','AGG');
console.log(dna);


//d) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(dna.slice(16,19));


//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dna.slice(4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);