// Définition de variables

// 1. Variable `nom`----> valeur "John".
// 2. Affichez la valeur de la variable `nom` dans la console en utilisant la fonction console.log().
// 3. Modification de la valeur de la variable `nom` pour qu'elle soit "Jane" sans modifier le code précédent.
// 4. Affiche à nouveau la valeur de la variable nom dans la console.
let nom= 'john';//1
    nom = 'jane';//3
 console.log(nom);//2&4
 console.log("")


//************************************************************//


 //  Boucles

// 1.une boucle for qui s'arrête si l'index dépasse 10, le resultat de la boucle doit correspondre aux nombres de 1 à 10 inclus.
// 2.console.log() pour afficher chaque nombre du tableau.

for(let i=1;i<=10;i++)
{
    console.log(i);
}
console.log("")



//************************************************************//


// Concaténation de chaînes de caractères

//1. Variable appelée `firstName` et valeur "John".
//2. Variable appelée `lastNAme` et valeur "Doe".
//3. Concaténation de chaînes de caractères qui contient le prénom et le nom séparés par un espace. 
//4. Affiche la chaîne de caractères créée dans la console en utilisant la fonction console.log().


let [firstName, lastName] = ["John", "Doe"];//1&2&3
typeof(firstName)//reverse quotes
let complete = ` ${firstName} ${lastName} `;
{
console.log(complete);//4

}
console.log("")
//************************************************************//


// Conditions

//1.Variable appelée `age` et affectée de la valeur de l'âge.
//2. Conditionnelle if pour vérifier si l'âge est supérieur ou égal à 18. 
//3 Si c'est le cas,fonction console.log() pour afficher le message "Vous êtes majeur". 
//4 Sinon,console.log() pour afficher le message "Vous êtes mineur"

let age = 14;//1

if (parseInt(age) && typeof (parseInt(age)) === 'number' && (age > 0 && age < 18)) //2
{
    console.log('vous êtes mineur');//3
} 
 else if (age >= 18) {
    console.log('Vous êtes majeur');//4
}


//************************************************************//
























