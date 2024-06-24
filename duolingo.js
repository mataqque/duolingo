//version 2 resolviendo ejercicios de duolingo
//version 3 solving exercises from duolingo
const dictionary = {
	hola: 'hello',
	de_nada: "you're welcome",
	adiós: 'goodbye',
	leche: 'milk',
	té: 'tea',
	sí: 'yes',
	café: 'coffee',
	agua: 'water',
	café: 'coffee',
	hola: 'hello',
	azúcar: 'sugar',
	gracias: 'thank you',
	por_favor: 'please',
};
const responses = {
	azúcar: ['sugar'],
	sugar: ['azucar'],
	thank_you: ["You're welcome!", "You're welcome."],
	thank_you_david: ["You're welcome, Emma!"],
	thank_you_fernanda: ["You're welcome, Maria."],
};

const succecions = {
	yes_or_no: ['Sí', 'o', 'no'],
	with_sugar_please: ['Con', 'azúcar', 'por', 'favor'],
	youre_welcome_goodbye: ['De', 'nada', 'adiós'],
	youre_welcome: ['De', 'nada'],
	yes: ['Sí'],
	coffee_and_tea_please: ['Café', 'y', 'té', 'por', 'favor'],
	with_milk: ['Con', 'leche'],
	yes_thank_you: ['Sí', 'gracias'],
	water_please: ['Agua', 'por', 'favor'],
	hello_julia: ['Hola', 'Julia'],
	coffee_or_tea: ['Café', 'o', 'té'],
	tea_please: ['Té', 'por', 'favor'],
	yes_coffee: ['Sí', 'café'],
	yes_water: ['Sí', 'agua'],
	coffee_and_tea: ['Café', 'y', 'té'],
	no_thank_you: ['No', 'gracias'],
	milk_or_water: ['Leche', 'o', 'agua'],
	milk_and_sugar: ['Leche', 'y', 'azúcar'],
	hello: ['Hola'],
	sugar: ['Azúcar'],
	with_milk_please: ['Con', 'leche', 'por', 'favor'],
	tea_and_coffee: ['Té', 'y', 'café'],
	coffee: ['Café'],
	no: ['No'],
	with_milk_and_sugar_please: ['Con', 'leche', 'y', 'azúcar', 'por', 'favor'],
	water: ['Agua'],
	hello_julia: ['Hola', 'Julia'],
	tea_or_coffee: ['Té', 'o', 'café'],
	goodbye: ['Adiós'],
	coffee_with_milk: ['Café', 'con', 'leche'],
	please: ['Por', 'favor'],
	coffe_please: ['Café', 'por', 'favor'],
	yes_thank_you: ['Sí', 'gracias'],
	coffee_please: ['café', 'por', 'favor'],
	thank_you_goodbye: ['Gracias', 'adiós'],
	yes_please: ['Sí', 'por', 'favor'],
	milk_please: ['Leche', 'por', 'favor'],
	coffee_with_milk_please: ['Café', 'con', 'leche', 'por', 'favor'],
	milk: ['Leche'],
	tea: ['Té'],
	azúcar: ['sugar'],
	thank_you: ['Gracias'],
};
const transformText = cadena => {
	if (typeof cadena == 'string') {
		const expresionRegular = /[?,.;!"']/g;
		const expresionRegular2 = /\s+/g;
		const cadenaLimpia = cadena.replace(expresionRegular, '');
		const cadenaRemplazada = cadenaLimpia.replace(expresionRegular2, '_').toLowerCase();
		return cadenaRemplazada;
	}
	return;
};

const getTextTalker = texto => {
	let indiceDosPuntos = texto.indexOf(':');
	if (indiceDosPuntos !== -1) {
		let textoFinal = texto.substring(indiceDosPuntos + 1).trim();
		return textoFinal;
	} else {
		return texto;
	}
};
function getTextComillas(texto) {
	let regex = /(['"])(.*?)\1/g;
	let resultados = [];
	let match;
	while ((match = regex.exec(texto))) {
		resultados.push(match[2]); // Captura el texto entre comillas
	}
	return resultados[0] ?? '';
}
const delayfunc = (func, time) => {
	return new Promise(resolve => {
		let delay = setTimeout(() => {
			func();
			clearTimeout(delay);
			resolve();
		}, time);
	});
};
const queryAll = e => document.querySelectorAll(`${e}`);
const query = e => document.querySelector(`${e}`);

const challenge_assist = ({ phrase, buttons }) => {
	const key = transformText(query(phrase).textContent);
	const _buttons = queryAll(buttons);
	if (!key || !_buttons) {
		localStorage.setItem('errorobj', JSON.stringify({ key, _buttons }));
		localStorage.setItem('error', '_challenge_assist _phrase or _buttons is null');
	}
	if (key && key.length > 0) {
		_buttons.forEach(btn => {
			if (btn.textContent === dictionary[key]) {
				btn.click();
			}
		});
	}
};

const challenge_dialogue = ({ phrase, buttons }) => {
	const key = transformText(getTextTalker(query(phrase).textContent));
	const btnsDialog = queryAll(buttons);

	btnsDialog.forEach(btnRecieved => {
		if (responses[key].includes(btnRecieved.querySelector('[data-test=challenge-judge-text]').textContent)) {
			btnRecieved.click();
		}
	});
};

const challenge_translate = ({ phrase, buttons }) => {
	const frase = query(phrase).textContent;
	const btns = queryAll(buttons);
	if (frase && frase?.length > 0 && btns && btns.length > 0) {
		const key = transformText(frase);
		succecions[key].forEach(txt => {
			btns.forEach(element => {
				if (element.textContent == txt) {
					element.click();
				}
			});
		});
	} else {
		localStorage.setItem('errorobj', JSON.stringify({ frase, btns }));
		localStorage.setItem('error', '_challenge_translate _frase or _buttons is null');
	}
};

const change_select = ({ phrase, buttons }) => {
	const key = transformText(getTextComillas(query(phrase).textContent));
	const translate = dictionary[key];

	const options = document.querySelectorAll("[role='radiogroup'] > div");
	options.forEach(opt => {
		if (opt.querySelector("[dir='ltr'][lang='en']").textContent.includes(translate)) {
			opt.click();
		}
	});
};

const challenge_match = ({ english, spanish }) => {
	const listpeersEnglish = queryAll(english);
	const listpeersEspanish = queryAll(spanish);
	listpeersEspanish.forEach(peer => {
		peer.click();
		const key = peer.querySelector('[data-test=challenge-tap-token-text]').textContent;
		listpeersEnglish.forEach(peerEnglish => {
			if (peerEnglish.querySelector('[data-test=challenge-tap-token-text]').textContent == dictionary[key]) {
				peerEnglish.click();
			}
		});
	});
};

const session_complete = ({ button }) => {
	delayfunc(() => {
		let find = setInterval(() => {
			const btn = query(button);
			if (btn) {
				btn.click();
				clearInterval(find);
				return;
			}
		}, 100);
	}, 2000);
};

const challenge_speak = ({ button }) => {
	const btn = query(button);
	if (btn) {
		btn.click();
	}
};

const TypesExercises = [
	{
		key: "[data-test='challenge challenge-dialogue']",
		description: 'Dialogo',
		parameters: { phrase: '[data-test="challenge challenge-dialogue"] [dir="ltr"]', buttons: '[role=radiogroup] [data-test=challenge-choice]' },
		function: challenge_dialogue,
	},
	{
		key: "[data-test='challenge challenge-assist']",
		description: 'Asistente',
		parameters: { phrase: "[data-test='challenge challenge-assist'] [lang='es']", buttons: "[role='radiogroup'] [data-test='challenge-choice'] [data-test='challenge-judge-text']" },
		function: challenge_assist,
	},
	{
		key: "[data-test='challenge challenge-translate']",
		description: 'Traducción',
		parameters: { phrase: "[data-test='challenge challenge-translate'] [dir='ltr']", buttons: "[data-test='challenge challenge-translate'] [data-test='word-bank'] > div button" },
		function: challenge_translate,
	},
	{
		key: "[data-test='challenge challenge-select']",
		description: 'Selección',
		parameters: { phrase: "[data-test='challenge challenge-select'] [data-test='challenge-header']" },
		function: change_select,
	},
	{
		key: "[data-test='challenge challenge-match']",
		description: 'Match',
		parameters: { english: '[dir="ltr"][lang="en"][translate="no"]', spanish: '[dir="ltr"][lang="es"][translate="no"]' },
		function: challenge_match,
	},
	{
		key: "[data-test='challenge challenge-speak']",
		description: 'Hablar',
		parameters: { button: "[data-test='player-skip']" },
		function: challenge_speak,
	},
];

function initObserver(fn) {
	const button = query("#session\\/PlayerFooter [data-test='player-next']");

	if (!button) {
		localStorage.setItem('error', 'No se encontro el boton de avanzar');
		return;
	}

	const observer = new MutationObserver(mutations => {
		if (mutations[0].attributeName == 'aria-disabled') {
			if (button.ariaDisabled == 'false') {
				delayfunc(() => {
					button.click();
				}, 1500);
			}
			if (button.ariaDisabled == 'true') {
				observer.disconnect();
				delayfunc(() => {
					button.click();
					fn();
				}, 1500);
			}
		}
	});

	observer.observe(button, {
		attributes: true,
		attributeFilter: ['aria-disabled'],
	});
}

function solveChallenge() {
	delayfunc(() => {
		const findExample = TypesExercises.find(element => {
			const key = query(element.key);
			if (key) {
				localStorage.setItem('errorobj', JSON.stringify({ message: 'fn solveChallenge key dont find', element: element.key }));
				return true;
			}
			return false;
		});

		if (findExample) {
			initObserver(solveChallenge);
			findExample.function({ ...findExample.parameters });
		}
		if (!findExample) {
			localStorage.setItem('error', 'No se encontro el tipo de ejercicio _solveChallenge');
			return;
		}
	}, 400);
}

async function init() {
	window.scrollTo(0, 0);
	const openBntMain = query('[data-test="skill-path-level-0 skill-path-level-skill"]');
	if (openBntMain) {
		openBntMain.click();
		await delayfunc(() => {
			let btnMain = document.querySelector("[data-test='skill-path-state-legendary skill-path-unit-test-0']");
			btnMain.click();
		}, 500);
		await delayfunc(() => {
			solveChallenge();
		}, 3000);
	}
}

const boton = document.createElement('button');
boton.id = 'Iniciar Script';
boton.innerHTML = 'Ejecutar';
boton.style = 'border: 1px solid black;border-radius: 5px;z-index: 100;top: 1rem;position: fixed;height: 50px;width: 200px; display: flex;justify-content: center;align-items: center;left:1rem';
document.body.appendChild(boton);
boton.addEventListener('click', init);

function Repeat() {
	let bucle = setInterval(() => {
		const link = window.location.href;
		if (link.includes('learn')) {
			boton.click();
		}
	}, 1000);
}

Repeat();

const finishLesson = [
	{
		key: "[data-test='session-complete-slide']",
	},
	{
		key: "[data-test='streak-slide']",
	},
	{
		key: "[data-test='daily-quest-reward-slide']",
	},
];

let bucleFinish = setInterval(() => {
	const find = finishLesson.find(element => {
		const key = query(element.key);
		if (key) {
			localStorage.setItem('errorobj', JSON.stringify({ message: 'fn solveChallenge key dont find', element: element.key }));
			return true;
		}
		return false;
	});
	if (find || query('h2').textContent.includes('Diamante')) {
		const button = query("#session\\/PlayerFooter [data-test='player-next']");
		delayfunc(() => {
			button.click();
		}, 2000);
	}
}, 2000);
