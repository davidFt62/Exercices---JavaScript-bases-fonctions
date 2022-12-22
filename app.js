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


console.log("")


//************************************************************//


//Création et parcours d'un tableau

//1. Tableau appelé `couleurs` qui contient les éléments suivants : "rouge", "vert", "bleu", "jaune", "orange".
//2. Boucle for pour parcourir le tableau couleurs
//3. Console.log() affiche chaque élément dans la console en utilisant la fonction .

let couleurs = ['rouge', 'vert', 'bleu', 'jaune', 'orange']//1
for (let i = 0; i < couleurs.length; i++) //2
{
    console.log(couleurs[i])//3
}

console.log("");


//************************************************************//


//Utilisation de Array.push() et Array.pop()

//1. Tableau appelé `numbers` qui contient les nombres suivants : 1, 2, 3, 4, 5.
//2. push() pour ajouter le nombre 6 au tableau numbers.
//3. pop() pour retirer le dernier élément du tableau numbers.
//4. Affiche le contenu du tableau numbers dans la console en utilisant la fonction console.log().


 numbers = [1, 2, 3, 4, 5];  //1
 push6 = numbers.push(6);//2  
 console.log(numbers);//4

console.log("");

 pop6 = numbers.pop(6);//3  
 console.log(numbers);//4

console.log("");


//************************************************************//


//Fonctions

//1. Écrivez une fonction qui prend en argument un entier et renvoie `true` si l'entier est pair, `false` sinon. Vous pouvez utiliser l'opérateur modulo `%` pour vérifier si un nombre est divisible par deux.

//2. Écrivez une fonction qui prend en argument un tableau d'entiers et renvoie la somme de tous les éléments du tableau. Vous pouvez utiliser une boucle `for` pour parcourir le tableau et ajouter chaque élément à une variable qui tiendra la somme.

//3. Écrivez une fonction qui prend en argument une chaîne de caractères et renvoie la chaîne de caractères inversée. Par exemple, si la chaîne passée en argument est "bonjour", la fonction doit renvoyer "ruojnob". Vous pouvez utiliser la méthode `split()` pour séparer la chaîne en un tableau de caractères, la méthode `reverse()` pour inverser l'ordre des éléments du tableau, et la méthode `join()` pour reconstruire la chaîne de caractères à partir du tableau inversé.




