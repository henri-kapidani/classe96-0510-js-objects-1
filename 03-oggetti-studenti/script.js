/*
Oggetti Studenti
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

const objStudent = {
	firstName: 'Pinco',
	lastName: 'Pallino',
	age: 30,
};

// const chiave = 'lastName';
// console.log(objStudent[chiave]);

// for (let key in objStudent) {
// 	console.log(key, ':', objStudent[key]);
// }


const studentsClass96 = [
	{
		firstName: 'Pinco',
		lastName: 'Pallino',
		age: 30,
	},
	{
		firstName: 'Pippo',
		lastName: 'Rossi',
		age: 25,
	},
	{
		firstName: 'Uno',
		lastName: 'Di Noi',
		age: 29,
	}
];

// for (let i = 0; i < studentsClass96.length; i++) {
// 	let student = studentsClass96[i];
// 	console.log(`${i}. ${student.firstName} ${student.lastName}`);
// }

console.log(studentsClass96);

const eleList = document.querySelector('#student-list');

const eleFirstName = document.querySelector('#first-name');
const eleLastName = document.querySelector('#last-name');
const eleAge = document.querySelector('#age');

printList(studentsClass96, eleList);
document.querySelector('form').addEventListener('submit', submitForm);



/* FUNCTION DEFINITIONS */
function printList(arr, eleContainer) {
	eleContainer.innerHTML = '';
	for (let i = 0; i < arr.length; i++) {
		let student = arr[i];
		eleContainer.innerHTML += `<li>${student.firstName} ${student.lastName}<button class="delete">X</button></li>`;
	}

	const listDeletes = document.querySelectorAll('.delete');
	for (let i = 0; i < listDeletes.length; i++) {
		const buttonDelete = listDeletes[i];
		buttonDelete.addEventListener('click', function() {
			studentsClass96.splice(i, 1);
			console.log(studentsClass96);
			printList(studentsClass96, eleList);
		})
	}
}

function submitForm(event) {
	// console.log(event);
	event.preventDefault();

	const newStudent = {
		firstName: eleFirstName.value,
		lastName: eleLastName.value,
		age: parseInt(eleAge.value),
	};

	studentsClass96.push(newStudent);

	// puliamo gli input
	eleFirstName.value = '';
	eleLastName.value = '';
	eleAge.value = '';

	console.log(studentsClass96);

	printList(studentsClass96, eleList);
}