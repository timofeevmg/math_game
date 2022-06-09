'use strict';

const sum = (a, b) => a + b;

const generateRandomNumber = () => Math.round(Math.random() * 100);

let randomANumber,
	randomBNumber,
	correctAnswer;

const getEntry = () => {
	return prompt(`Какова сумма чисел ${randomANumber} и ${randomBNumber}?`, 'ваш ответ - число');
}

const getAnswer3Attempt = () => {
	let entry;

	for (let j = 3; j > 0; j--) {
		entry = getEntry();

		if (entry === null) return null;
		if (entry === '' || entry === 'ваш ответ - число' ) {
			alert(`Вы не ответили. Осталось попыток: ${j - 1}.`);
			continue;
		}
		if (!Number(entry) && Number(entry) !== 0) {
			alert(`Ваш ответ - не число. Осталось попыток: ${j - 1}.`);
			continue;
		}
		return entry;
	}
	return false;
}


const startRound = () => {

	randomANumber = generateRandomNumber();
	randomBNumber = generateRandomNumber();

	correctAnswer = sum(randomANumber, randomBNumber);

	let answer = getAnswer3Attempt();

	if (!answer) return false;

	if (Number(answer) === correctAnswer) {
		alert('Ответ правильный!');
		return true;
	} else {
		alert(`Вы ошиблись! Правильный ответ: ${correctAnswer}`);
		return false;
	}
};

const playGame = () => {
	for (let i = 0; i < 3; i++) {
		const isCorrectAnswer = startRound();
		if (!isCorrectAnswer) {
			alert('Игра окончена.');
			return;
		}
	}
	alert('Вы победили!');
};
