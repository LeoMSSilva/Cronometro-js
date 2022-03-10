function main() {
	const chronometer = document.querySelector('#chronometer');
	const buttonStatus = document.querySelector('#start');
	const buttons = document.querySelector('#buttons');
	let seconds = 0;
	let timer;
	let statusColor = false;

	const setChronometerColor = () =>
		statusColor
			? chronometer.classList.add('red')
			: chronometer.classList.remove('red');

	const setButtonName = () =>
		(buttonStatus.innerHTML = `${statusColor ? 'Parar' : 'Retonar'}`);

	const setTimeOnChronometer = () => {
		const newChronometer = new Date(seconds * 1000).toLocaleTimeString(
			'pt-BR',
			{ timeZone: 'UTC' },
		);
		chronometer.innerHTML = `${newChronometer}`;
	};

	const incrementCounter = () => {
		timer = setInterval(() => {
			seconds++;
			setTimeOnChronometer();
		}, 1000);
	};

	const startCounter = () => {
		setChronometerColor();
		statusColor = statusColor ? false : true;
		setButtonName();
		statusColor && incrementCounter();
	};

	const resetCounter = () => {
		statusColor = false;
		setChronometerColor();
		buttonStatus.innerHTML = 'Iniciar';
		seconds = 0;
		setTimeOnChronometer();
	};

	buttons.addEventListener('click', (e) => {
		clearTimeout(timer);
		if (e.target === start) startCounter();
		else if (e.target === reset) resetCounter();
	});
}

main();
