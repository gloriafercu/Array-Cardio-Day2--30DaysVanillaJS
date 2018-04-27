'use strict';

const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];


// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?

/* Con algún elemento del array cumpla la condición ya devuelve TRUE, si no encuentra ninguno devuelve FALSE */

const somePeopleOlderThan19 = people.some(person => {
	const currentYear = (new Date()).getFullYear();
	return currentYear - person.year >= 19;
});
console.log(somePeopleOlderThan19); // TRUE


// Array.prototype.every() // is everyone 19 or older?

/* Todos los elementos deben cumplir la condición para que devuelva TRUE */

const everyBodyOlderThan19 = people.every(person => {
	const currentYear = (new Date()).getFullYear();
	return currentYear - person.year >= 19; // FALSE
});
console.log(everyBodyOlderThan19);

const findOnePersonOlderThan19 = people.find(person => {
	const currentYear = (new Date()).getFullYear();
	return currentYear - person.year >= 19;
});
console.log(findOnePersonOlderThan19); // Devuelve la primera persona que cumple la condición

// Array.prototype.find()
/* Find is like filter, but instead returns just the one you are looking for
find the comment with the ID of 823423 */

const findCommentID = comments.find(comment =>
	comment.id === 823423);
console.log(findCommentID);

// Array.prototype.findIndex()
/* Find the comment with this ID delete the comment with the ID of 823423 */

const findCommentIdAndDelete = comments.findIndex(comment =>
	comment.id === 823423);
console.log(findCommentIdAndDelete); // Devuelve el índice del elemento que cumple esa condición (en este caso tiene index=1)

// console.log(comments.splice(findCommentIdAndDelete, 1));
// console.log(comments);

const newComments = [
	...comments.slice(0, findCommentIdAndDelete),
	...comments.slice(findCommentIdAndDelete + 1)
]
console.log(newComments);
