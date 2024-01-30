"use strict";


/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const array = Array.from({length: 5}, () => Math.floor(Math.random() * 10));
console.log(array);


let sum = array.reduce(function(a, b){
    return a + b;
}, 0);
console.log(sum);


const minArray = Math.min(...array);
console.log(minArray);



const arrayIndex = (arr, findNumber) => {
    const result = [];

    for (let i = 0; i <= arr.length; i ++) {
        if (arr[i] === findNumber)

        result.push(i)
    }

    return result;
}
 
console.log(arrayIndex(array, 3));



 