/*
// Primi passi con array di oggetti
// definiamo un array di oggetti:
// - ogni elemento dell'array è un oggetto che rappresenta una classe
// - ogni classe ha le proprietà nome e numeroStudenti

// creiamo un oggetto che rappresenta una nuova classe

// aggiungiamo la nuova classe all'array iniziale

// stampiamo la lista delle classi
*/

const arrClasses = [
	{
		nome: 'classe1',
		numeroStudenti: 20,
		listaStudenti: ['Mattia', 'Giacomo', 'Pinco', 'Pippo'],
	},
	{
		nome: 'classe2',
		numeroStudenti: 30,
		listaStudenti: ['Martina', 'Giorgia'],
	},
	{
		nome: 'classe96',
		numeroStudenti: 35,
		listaStudenti: ['Mattia', 'Pinco', 'Pippo'],
	},
	{
		nome: 'classe100',
		numeroStudenti: 34,
		listaStudenti: ['Mattia', 'Giacomo', 'Pinco'],
	},
];

console.log(arrClasses[0].listaStudenti[2]);
console.log(arrClasses[0].listaStudenti);
console.log(arrClasses[0].listaStudenti[0]);

const newClass = {
	nome: 'classe120',
	numeroStudenti: 40,
	listaStudenti: ['Giacomo', 'Pinco'],
};
arrClasses.push(newClass);

/* equivalente a questa */
// arrClasses.push({
// 	nome: 'classe120',
// 	numeroStudenti: 40,
// });

// console.log(arrClasses);


for (let i = 0; i < arrClasses.length; i++) {
	const objClass = arrClasses[i];
	// console.log(objClass);
	console.log(`La classe ${objClass.nome} ha ${objClass.numeroStudenti} studenti`);
}






const classi = [
	['Mattia', 'Giacomo', 'Pinco', 'Pippo'],
	['Martina', 'Giorgia'],
];

console.log(classi[0][1]);