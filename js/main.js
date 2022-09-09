const ball = document.querySelector('img');
const input = document.querySelector('.question-area__input');
const error = document.querySelector('.question-area__error');
const answer = document.querySelector('.question-area__answer');
const answers = ['Nie', 'Tak', 'Może', 'Nie chcesz tego wiedzieć'];

const answerEngine = () => {
	animate();
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value === '') {
		error.textContent = 'Zadaj pytanie';
	} else if (input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?"';
	} else {
		genrateAnswer()
	}
};

const genrateAnswer = () => {
	min = Math.ceil(0);
	max = Math.floor(4);

	let random = Math.floor(Math.random() * (max - min) + min);

	answer.textContent = answers[random]
	input.value = ''
	error.textContent = '';

};

const animate = () => {
	const removeClass = () => {
		ball.classList.remove('shake-animation');
	};

	ball.classList.add('shake-animation');
	setTimeout(removeClass, 1200);
};

ball.addEventListener('click', answerEngine);
