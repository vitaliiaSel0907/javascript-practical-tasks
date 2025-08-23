//Задача 1: Парне чи непарне

//Напиши код, який запитує у користувача число і перевіряє:

//Якщо число парне → вивести "Число парне"

//Якщо число непарне → вивести "Число непарне"

//Підказка: використовуй оператор % для перевірки остачі від ділення.

/*    

const number = Number(prompt("Введіть число"));

if (number % 2 === 0) {
    alert("Число парне");
} else {
    alert("Число непарне");
}


//Задача 2: Парне чи непарне
// Задача 2: Парне чи непарне
const num = Number(prompt("Enter a number"));

if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}


//Задача 3: Вік користувача

//Запитай у користувача його вік і виведи повідомлення:

//Якщо вік менше 18 → "Ви ще не дорослі"

//Якщо від 18 до 60 включно → "Ви дорослі"

//Якщо більше 60 → "Ви пенсіонер"

const age = Number(prompt("How old are you?"));

if (age <= 18) {
  alert("You are young");
} else if (age > 18 && age <= 60) {
  alert("You are an adult");
} else {
  alert("You are a pensioner!");  
}
   */




  // МаСИВИ  масиви у JavaScript називаються arrays (однина — array, множина — arrays).

      let names = ["Anna", "Oleh", "Maria", "Dmytro"]; // Массив/рядок

         const numbers = [1, 2, 3, 4, 5]; // масив чисел

         const mixed = ['apple', 10, true]; // масив з елементами різних типів

// Доступ до елементів

const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'


// Перевизначення значення елемента МаСИВИ 
const plan = ['Earth', 'Mars', 'Venus', 'Uranus'];
plan[0] = 'Jupiter';
plan[2] = 'Neptune';
console.log(plan); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']
/// написвти ще


//  Довжина масиву length

const vegetables = ['Carrot', 'Tomato', 'Cucumber'];
console.log(vegetables.length); // 3

// Перевірка кількості елементів у масиві

if (vegetables.length >= 3) {
    console.log("3 or more vegetables");
} else {
    console.log("Less than 3 vegetables"); //  Менше 3 овочів
}

//  Індекс останнього елемента  МаСИВИ
//                    0          1          3
const chocolates = ["Milka", "Snickers", "Twix"];
const lastIndex = chocolates.length - 1;
console.log(chocolates[lastIndex]); // "Twix"

// Щоб отримати індекс останнього елемента масиву
//  оголошується змінна lastElementIndex зі значенням planets.length - 1.



// Індекс останнього елемента  (МаСИВИ)
//   Індекс останнього елемента можна визначити за допомогою формули довжина_масиву -1

// задача 1
const plantin = ["Earth", "Mars", "Venus"];
const lastElementIndex = plantin.length - 1;
console.log(plantin[lastElementIndex]); // "Venus"

// задача 2
const bols = ["red", "blue", "white"];
const bolsLastIndex = bols.length - 1;
console.log(bols[bolsLastIndex]); // "Venus"



// Два масиви ніколи не дорівнюють один одному
//  навіть якщо вони порожні або в них однакові елементи.


const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];


// задача 1
const a = [10, 20];
const b = a;
b.push(30);

console.log(a); // ?
console.log(b); // ?

// задача 2
const c = ["malyna", "yabluko"];
const k = a;
console.log(c); // ["Mango", "Poly"]
console.log(k); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(c); // ["Mango", "Jacob"]
console.log(k); // ["Mango", "Jacob"]

b[0] = "Ajax";
console.log(c); // ["Ajax", "Jacob"]
console.log(k); // ["Ajax", "Jacob"]




// Приведення типів: масиви
// приклад
const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"



//  Методи масиву //

// Задача:1
// У тебе є масив із назв фруктів.
// Потрібно об/єднати всі фрукти в один рядок,
//  де фрукти розділені комою та пробілом.

const fruits = ["Apple", "Banana", "Cherry", "Orange"];

// Використовуємо join
const fruitsString = fruits.join(", ");
console.log(fruitsString);

// Задача:2
//  Ми перетворюємо масив у рядок за допомогою join(", ").
// Створюємо масив vegetablesShop, який містить три рядки: "potato", "corn" та "beet"
const vegetablesShop = ["potato", "corn", "beet"]; 

// join(", ") об'єднує елементи масиву в один рядок через кому та пробіл
const vegetablesmy = vegetables.join(", ");
 // Повинно вивести: "potato, corn, beet"
console.log(vegetablesmy);



// Задача:1
function getLength(array) {
  const stringlet = array.join("");
  return stringlet.length;
}
console.log(getLength(["Mango", "hurries", "to", "the", "train"])); 
console.log(getLength(["M", "a", "n", "g", "o"]));
console.log(getLength(["top", "picks", "for", "you"])); 



// Задача:1 split(" ")      Метод split()  Він дозволяє перетворити рядок на масив
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" "); // розбиваємо рядок на масив слів
  const numberOfWords = words.length; // рахуємо кількість слів
  const totalPrice = numberOfWords * pricePerWord; // множимо на ціну за слово
  return totalPrice; // повертаємо загальну вартість
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80


// Метод concat()
// Метод concat(arr1, arr2, ..., arrN) 
// використовується для об'єднання двох або більше масивів.

const tropicalFruits = ["Mango", "Papaya"];
const berries = ["Strawberry", "Blueberry"];
const allFruits = tropicalFruits.concat(berries);

console.log(tropicalFruits); // ["Mango", "Papaya"]
console.log(berries); // ["Strawberry", "Blueberry"]
console.log(allFruits); // ["Mango", "Papaya", "Strawberry", "Blueberry"]


// Метод indexOf()
// Задача:1
const clothes = ["T-shirt", "Jeans", "Jacket", "Dress", "Jacket"];

//  шукає перше слово "Jacket". Коли знаходить — каже, на якій позиції воно стоїть.
console.log(clothes.indexOf("Jacket"));   // 2
console.log(clothes.indexOf("Shoes"));    // -1

// indexOf("Shoes") → програма теж шукає "Shoes", але такого слова в масиві немає.
// Тоді вона повертає -1, щоб сказати: "Не знайшла".


// Задача:2
const candies = ["Snickers", "Mars", "Twix", "Baunty"];
console.log(candies.indexOf("Kikkat"));   // -1
console.log(candies.indexOf("Mars"));    // 1

// Метод push()
// Метод push в JavaScript використовується для того, щоб додати елемент(и) у кінець масиву.
const snacks = ["Chips", "Burger", "Pizza"];

snacks.push("Hot-dog");
console.log(snacks); 
// ["Chips", "Burger", "Pizza", "Hot-dog"]

snacks.push("Fries", "Taco");
console.log(snacks); 
// ["Chips", "Burger", "Pizza", "Hot-dog", "Fries", "Taco"]

//« ЯК  подивитися, на якому місці стоїть кожне слово». цикл for
for (let i = 0; i < snacks.length; i++) {
  console.log(`${snacks[i]} знаходиться на позиції ${i}`);
}

// ________for (let i = 0; i < snacks.length; i++);________
  

// Цикл for використовується, щоб пройти по всіх елементах масиву.
// let i = 0       → створюємо змінну i, яка показує позицію елемента (починаємо з 0)
// i < array.length → умова, поки i менше за довжину масиву, цикл продовжується
// i++             → після кожного кроку збільшуємо i на 1, щоб перейти до наступного елемента
// В середині циклу array[i] дає доступ до елемента масиву на позиції i


// ======== Ітерація по масиву  ========

// Цикл for дозволяє нам пройтись по всіх елементах масиву (це і є "інтерація")
//  і зробити щось з кожним елементом, наприклад, вивести його в консоль.

// ================================
//   Можна писати i = i + 1, i += 1 або i++ — головне, щоб змінна зростала, і цикл не застрягав.
// ================================


// Ітерація по масиву меблів
// Масив меблів
const furniture = ["Шафа", "Крісло", "Стіл"];
// Ми хочемо пройтись по всіх меблях і вивести їх у консоль разом з номером позиції
for (let a = 0; a < furniture.length; a += 1) {
  console.log(a, furniture[a]);
}


// ======== Ітерація по масиву  ========
//=====    задача ====
// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
// Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. 
// Якщо жодного парного числа немає, то масив має бути пустим.
//  Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.


function getEvenNumbers(start, end) {
  const evenNumbers = []; // Масив для парних чисел

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) { // Перевіряємо, чи число парне
      evenNumbers.push(i); // Додаємо парне число в масив
    }
  }
  return evenNumbers; // Повертаємо масив парних чисел
}
// Приклади виклику функції
console.log(getEvenNumbers(2, 10)); // [2, 4, 6, 8, 10]
console.log(getEvenNumbers(3, 7));  // [4, 6]
console.log(getEvenNumbers(11, 15)); // []


