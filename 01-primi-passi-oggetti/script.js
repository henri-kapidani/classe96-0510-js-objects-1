// Primi passi con gli oggetti
// creare un oggetto
// leggere un valore
// modificare valori
// aggiungere valori
// stampare tutti i valori

const palla = {
	colore: ['blu', 'rosso'],
	tipo: 'pallina da golf',
	diametro: 3,
};

console.log(palla);

console.log('Il diametro della pallina e\': ' + palla.diametro + ' cm.');
console.log('Il diametro della pallina e\': ' + palla['diametro'] + ' cm.');
console.log('Il diametro della pallina e\': ' + palla.peso + ' cm.');

palla.diametro = 10;
palla['diametro'] = 20;
palla.peso = 1;
palla['peso'] = 2;

console.log('Il diametro della pallina e\': ' + palla.peso + ' cm.');
console.log(palla);

// stampare tutti i valori
console.log('inizio ciclo');
for (let key in palla) {
	// key = 'una delle chiavi di palla';
	console.log(key + ': ' + palla[key]);
}

// for (let ciao in palla2) {
// 	console.log(ciao + ': ' + palla[ciao]);
// }

console.log('ciclo finito');

/*
1. key = 'colore';		'colore: blu,rosso'
2.	key = 'tipo';			'tipo: pallina da golf'
3.	key = 'diametro';		'diametro: 20'
4.	key = 'peso';			'peso: 2'
*/


/* per iterare sugli array evitando l'uso dell'indice */
const arr = [1, 2, 3, 4, 5, 6];
for (let element of arr) {
	console.log(element)
}