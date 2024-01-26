"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const sum = (n1, n2) => n1 + n2

const diff = (n1, n2) => {
	if (n1 === n2) return 0

	if (n1 > n2) return n1 - n2

	return n2 - n1
}

const mult = (n1, n2) => n1 * n2

const div = (n1, n2) => n1 / n2

console.log('Сложение', sum(2, 6))    // 8
console.log('Разность', diff(2, 6))   // 4
console.log('Умножение', mult(2, 6))  // 12
console.log('Деление', div(2, 6))	