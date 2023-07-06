

// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"


// function square(a) {
//   console.log(a);
  // if ( a === undefined){
  //   console.error("Функция \"square\" не может быть вызвана без аргумента");
  // }else{
  // console.log(a * a)
// }

// square(10) // 100

// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента



// Задание 4
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// numbers.forEach(function(item){
// 	console.log(item);
// })

// Задание 5
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

// function sumObjectValues(objectWithNumbers){
// 	let sum = 0;
// 	for (let key in objectWithNumbers){
// 		if (typeof objectWithNumbers[key] === 'number'){
// 			sum += objectWithNumbers[key];
// 		}
// 	}
// 	return sum;
// }
// console.log(sumObjectValues(objectWithNumbers));

// Задание 6
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

// function ucFirst(str){
// 	return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst('hello'));

//  Задание 7
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// const checkSpam = str =>{
// 	let strLC = str.toLowerCase();
// 	if (strLC.includes('badWord'.toLowerCase()) || strLC.includes('XXX'.toLowerCase())){
// 		return true;
// 	}else{
// 		return false;
// 	}
// 	}
	
// 	res1 = checkSpam('nfggnmgmx XXXbadWord') 
// 	res2 = checkSpam('nfggnmgmx badWorddsvgz') 
// 	res3 = checkSpam('nfggnmgmx sdvzbxnxnc') 
	
// 	console.log(res1, res2, res3);

//Задание 8
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.

// const splitString = str => {
// 	return str.split("").reverse().join("");
// }

// console.log(splitString("привет, Женя"));

// Задание 9
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:
// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк


// let stations = [

// 'MAN675847583748sjt567654;Manchester Piccadilly',

// 'GNF576746573fhdg4737dh4;Greenfield',

// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

// 'SYB4f65hf75f736463;Stalybridge',

// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

// ];

// stations.forEach(function(element){
// 	const kodStations = element.slice(0,3);
// 	const index = (element.indexOf(';') + 1);
// 	console.log(`${kodStations}: ${element.slice(index)}`);
// }
// )

// Задание 10  (я так и не поняла как его сделать((((
	// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// ПОДСКАЗКА

// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
// let unique = [];
// // for (let item of strings){
// 	if (strings.find(item => item === 'кришна')){
// 	    unique.push(item);
// 	}else if (strings.find(item => item === 'харе')){
// 		unique.push(item);
// 	}else if (strings.find(item => item === ':-O')){
// 		unique.push(item);
// 	}


	
// // const wordOne = strings.find(item => item === 'кришна'.unique.push(item));
// // const wordTwho = strings.find(item => item === 'кришна'.unique.push(item));
// // const wordThree = strings.find(item => item === ':-O'.unique.push(item));
// // }
// // console.log(unique.push(wordOne), unique.push(wordTwho), unique.push(wordThree));


// console.log(unique);
// // console.log(wordOne, wordTwho, wordThree);
// 	// const newArr = strings.map(function (item) {
// 	// return item.find('кришна'); 

// // })
// // strings.forEach(function (element){

// // })

// // console.log(newArr);

// Задание 11
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
// Тестовые данные:
// 1.  Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.  Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

// В задании необходимо использовать методы массивов: forEach, slice, concat


// const verifyCats = (array1, array2) =>{
// 	const newArray1 = array1.slice(1, array1.length -1);
// 	const allCats = newArray1.concat(array2);
// 	allCats.forEach((element, index)  => {
// 		if (element >= 2){
// 			console.log(`Кошка № ${index + 1} взрослая, ей ${element} лет`);
// 		}else{
// 			console.log(`Кошка № ${index + 1} еще котенок`);
// 		}
// 	});
// }

// let catsResult1 = verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);

// let catsResult2 = verifyCats([3, 5, 9, 14, 1, 2, 6, 8, 3, 10], [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]);



// Задание12
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

// let catsResult1 = verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9], [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]);

// let arr = [5, 4, 3, 8, 0];

// function filterFor(arr, a){
// 	const newArr = arr.filter(function(item){
// 		return item >= a;
// 	})
// 	return newArr;
// }

// console.log(filterFor(arr, 5));

// Задание 13 
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

// const words = ['yes', 'hello', 'no', 'easycode', 'what'];

// const getWords = words.filter(function(item){
// 	return item.length > 3;
// })
// console.log(getWords);

// // const getWords = words.filter(item => item.length > 3);
// // console.log(getWords);

// Задание 14
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.

// const array = [ [14, 45], [1], ['a', 'c', 'd'] ];

// const sortArray = array.sort(function(a, b){
// 	return a.length - b.length;
// })

// console.log(sortArray);







//Задание 15  (еще не успела закончить эту задачу)
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)
// 2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)
// 3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

// let result1 = getAverageHumanAge ([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]);
// let result2 = getAverageHumanAge ([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);

// const getAverageHumanAge = (array) =>{
// const humanAge = getAverageHumanAge.map(function (item){
// 	if (item <= 2){
// 		(`Человеческий возраст = ${item * 10}`)
// 	}else{
// 		(`Человеческий возраст = ${item * 7}`)
// 	}
// } )
// }
